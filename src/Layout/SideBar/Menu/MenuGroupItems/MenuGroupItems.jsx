import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

import * as styled from "./MenuGroupItemsStyles";

const MenuGroupItems = ({ listItems, navigate, clickedItem, isClosed }) => {
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
  const textColor = (route)=>{
    if(clickedItem === route){
      if (themeMode === "light") return theme.general.colors.primary;
      else return theme.general.button.onHover.normal;
    }else return theme.general.colors.secondary;
  }
  return (
    <styled.Container isClosed={isClosed} themeMode={themeMode}>
      {listItems.map((item, index) => (
        <styled.row
          key={item.route}
          color={highlightColor(item, clickedItem)}
          onClick={() => navigate(item.route)}
          animationTime={getAnimationTime(index)}
          isClosed={isClosed}
        >
          <styled.icon>{item.icon}</styled.icon>
          <styled.text color={textColor(item.route)}>
            {item.name}
          </styled.text>
        </styled.row>
      ))}
    </styled.Container>
  );
};

export default MenuGroupItems;
