import React from "react";

import { BluredCircleProps } from "../../lib/index";

function BluredCirlce({ color, blurRange }: BluredCircleProps) {
  return (
    <div
      className="BluredCircle"
      style={{ backgroundColor: color, filter: `blur(${blurRange}px)` }}
    />
  );
}

export default BluredCirlce;
