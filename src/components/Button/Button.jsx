import React from "react";

import * as styled from "./ButtonStyles";

const Button = ({
  text,
  onClickFunc,
  height,
  width,
  backgroundColor,
  hoverBackgroundColor,
}) => {
  return (
    <styled.Container
      height={height}
      width={width}
      onClick={onClickFunc}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      <styled.text>{text}</styled.text>
    </styled.Container>
  );
};

export default Button;
