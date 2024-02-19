import React from "react";
import { RiPieChartFill } from "react-icons/ri";
import { AiOutlinePieChart } from "react-icons/ai";
import {
  FaChevronDown,
  FaChevronUp,
  FaNewspaper,
  FaRegNewspaper,
} from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import { useTheme } from "styled-components";
import { useSelector } from "react-redux";

import * as styled from "./MenuGroupStyles";

const MenuGroup = ({ isMenuGroupOpen, iconColor, onClickFunc, text }) => {
  const theme = useTheme();
  const themeMode = useSelector((state) => state.user.value.themeMode);
  const menuGroupIconStyles = {
    marginRight: 8,
  };
  const highlightedIconColor  = ()=>{
    return theme.general.colors.secondary
  }
  const highlightedIcon = () => {
    if (text === "Markets")
      return (
        <RiPieChartFill
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
    else if (text === "News")
      return (
        <FaNewspaper
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
    else
      return (
        <IoEye
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
  };
  const notHighlightedIcon = () => {
    if (text === "Markets")
      return (
        <AiOutlinePieChart
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
    else if (text === "News")
      return (
        <FaRegNewspaper
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
    else
      return (
        <BsEye
          size={20}
          color={highlightedIconColor()}
          style={menuGroupIconStyles}
        />
      );
  };
  const highlightColor = () => {
    if (themeMode === "light") {
      return isMenuGroupOpen
        ? theme.general.colors.highlitedMenuBackGround
        : theme.light.primaryBackground;
    } else {
      return isMenuGroupOpen
        ? theme.dark.secondaryBackground
        : theme.dark.tertiary;
    }
  };
  return (
    <styled.Container onClick={onClickFunc} color={highlightColor()}>
      <styled.row>
        {isMenuGroupOpen ? highlightedIcon() : notHighlightedIcon()}
        <styled.text clicked={isMenuGroupOpen}>{text}</styled.text>
      </styled.row>
      <styled.icon>
        {isMenuGroupOpen ? (
          <FaChevronUp size={13} color={iconColor} />
        ) : (
          <FaChevronDown size={13} color={iconColor} />
        )}
      </styled.icon>
    </styled.Container>
  );
};

export default MenuGroup;
