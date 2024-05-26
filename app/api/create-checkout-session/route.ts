import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey =
  "sk_test_51PGNIqEITp6yCHq5Je1QVniN5NyFCdwwPoZFrtMsxOABLysTEr5wMnWnLJ932h6r6QMuW26u2c3tLD7He4ADPv1Y001Et83w0Z";
if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not defined in environment variables.");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();

  const productsLineItems = body.cartProducts.map((order: any) => ({
    price_data: {
      currency: "eur",
      product_data: {
        name: order.product.name,
      },
      unit_amount: order.product.newPrice * 100,
    },
    quantity: order.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: productsLineItems,
      mode: "payment",
      success_url: `${new URL(request.url).origin}/success`,
      cancel_url: `${new URL(request.url).origin}/cancel`,
    });

    return new NextResponse(JSON.stringify({ id: session.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new NextResponse(
        JSON.stringify({ error: "Unknown error occurred" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
