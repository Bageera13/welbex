import React from "react";
import "./linkComponent.css";

type PropsLink = {
  titleLink: string;
  fontWeightProps: React.CSSProperties;
};

export const LinkComponent = ({ titleLink, fontWeightProps }: PropsLink) => {
  
  return (
  <button style={fontWeightProps} className="__link">{titleLink}</button>
  );
};
