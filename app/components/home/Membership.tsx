"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addOneToCart, emptyCart } from "@/app/features/clientCart";

import { MembershipProps } from "../../lib/index";
import { SVGs } from "../../constants";
import { RootState } from "@/app/store/store";

function Membership({ membership }: MembershipProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);

  function addToCartMembership() {
    if (!membership.membershipSku) {
      return;
    }

  console.log(cart)

    dispatch(emptyCart());
    dispatch(addOneToCart(membership.membershipSku));
    window.location.href = "/shop/cart";
  }

  return (
    <div
      className={`Membership ${membership?.standOut && "standOut"}`}
      id="membership"
    >
      <div className="details">
        <p className="title">{membership.title}</p>
        <p className="price">
          €{membership.price}
          <span className="per">{membership?.per && membership.per}</span>
        </p>
        <p className="description"> {membership.description}</p>
        <ul className="includedList">
          {membership.included.map((i) => (
            <div className="included" key={i}>
              <div className="icon">{SVGs.included}</div>
              <p className="includedText">{i}</p>
            </div>
          ))}
        </ul>
        <div className="contactButton">
          {membership.price === "10" ? (
            <Link className="button" href={membership.button.link}>
              {membership.button.text}
            </Link>
          ) : (
            <button onClick={addToCartMembership} className="button">
              {membership.button.text}
            </button>
          )}
        </div>
      </div>
      {membership.standOut && (
        <div className="standOutContainer">
          <div className="standOutText">
            {membership?.standOut && membership.standOut}
          </div>
        </div>
      )}
    </div>
  );
}

export default Membership;
