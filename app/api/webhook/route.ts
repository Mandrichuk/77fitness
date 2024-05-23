import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import getRawBody from "raw-body";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-04-10",
});

const endpointSecret = process.env.WEBHOOK_SECRET as string;

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: NextRequest) {
  try {
    console.log("req.headers", request.headers);

    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Only POST requests allowed" },
        { status: 405 }
      );
    }

    const sig = request.headers.get("stripe-signature");

    if (!sig) {
      return NextResponse.json(
        { error: "Missing stripe-signature header" },
        { status: 400 }
      );
    }

    const rawBody = await getRawBody(request.body as any);

    let event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
    } catch (err: any) {
      return NextResponse.json(
        { error: `Webhook Error: ${err.message}` },
        { status: 400 }
      );
    }

    console.log("event.type", event.type);

    if (event.type === "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        (event.data.object as any).id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      if (!lineItems) {
        return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
      }

      try {
        console.log("Fulfill the order with custom logic");
        console.log("data", lineItems.data);
        console.log(
          "customer email",
          (event.data.object as any).customer_details.email
        );
        console.log("created", (event.data.object as any).created);
      } catch (error) {
        console.log("Handling when you're unable to save an order");
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
