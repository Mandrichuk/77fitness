import React from "react";
import Link from "next/link";

import { MembershipProps } from "../lib/index";
import { SVGs } from "../constants";

function Membership({ membership }: MembershipProps) {
  return (
    <div className={`Membership ${membership?.standOut && "standOut"}`} id="membership">
      <div className="details">
        <p className="title">{membership.title}</p>
        <p className="price">€{membership.price}</p>
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
          <a className="button" href={`tel:${membership.button.link}`}>
            {membership.button.text}
          </a>
        </div>
      </div>
      {membership?.standOut && (
        <div className="inscription">
          <div className="icon">
            {membership?.standOut && membership.standOut}
          </div>
        </div>
      )}
    </div>
  );
}

export default Membership;
