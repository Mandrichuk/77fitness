import React from "react";

import { TextLayersProps } from "../../lib/index";

function TextLayers({ bgText, title }: TextLayersProps) {
  return (
    <div className="textLayers">
      <h2 className="bgText">{bgText}</h2>
      <h3 className="title">{title}</h3>
    </div>
  );
}

export default TextLayers;
