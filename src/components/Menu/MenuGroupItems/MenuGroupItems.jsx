import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

import * as styled from "./MenuGroupItemsStyles";

const MenuGroupItems = ({
  listItems,
  setClickedItem,
  clickedItem,
  isClosed,
}) => {
  const themeMode = useSelector((state) => state.user.value.themeMode);
  const theme = useTheme();
  const getAnimationTime = (index) => {
    const time = ((index + 10) * 0.1).toString();
    return time + "s";
  };
  const highlightColor = (item, clickeditem) => {
    if (themeMode === "light") {
      return clickeditem === item.route
        ? theme.general.colors.highlitedMenuBackGround
        : theme.light.primaryBackground;
    } else {
      return clickeditem === item.route
        ? theme.dark.secondaryBackground
        : theme.dark.tertiary;
    }
  };
  return (
    <styled.Container isClosed={isClosed} themeMode={themeMode}>
      {listItems.map((item, index) => (
        <styled.row
          key={item.route}
          color={highlightColor(item, clickedItem)}
          onClick={() => setClickedItem(item.route)}
          animationTime={getAnimationTime(index)}
          isClosed={isClosed}
        >
          <styled.icon>{item.icon}</styled.icon>
          <styled.text clicked={clickedItem === item.route ? true : false}>
            {item.name}
          </styled.text>
        </styled.row>
      ))}
    </styled.Container>
  );
};

export default MenuGroupItems;
