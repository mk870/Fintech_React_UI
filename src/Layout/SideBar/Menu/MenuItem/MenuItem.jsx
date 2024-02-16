import React from "react";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";

import * as styled from "./MenuItemStyles";

const MenuItem = ({ item, isClicked, onClickFunc }) => {
  const themeMode = useSelector((state) => state.user.value.themeMode);
  const theme = useTheme();
  const highlightColor = () => {
    if (themeMode === "light") {
      return isClicked
        ? theme.general.colors.highlitedMenuBackGround
        : theme.light.primaryBackground;
    } else {
      return isClicked ? theme.dark.secondaryBackground : theme.dark.tertiary;
    }
  };
  return (
    <styled.Container onClick={onClickFunc} color={highlightColor()}>
      <styled.icon>{item.icon}</styled.icon>
      <styled.text clicked={isClicked}>{item.name}</styled.text>
    </styled.Container>
  );
};

export default MenuItem;
