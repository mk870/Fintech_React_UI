import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import * as Styled from "./ThemeTogglerStyles";
import { addThemeMode } from "Redux/Slices/UserSlice";
import { AppTheme } from "Styles/AppThemes";

const ThemeToggler = ({ themeMode }) => {
  const theme = AppTheme;
  const dispatch = useDispatch();
  const size = 20;
  return (
    <Styled.Container themeMode={themeMode}>
      <Styled.Row
        onClick={() => dispatch(addThemeMode("light"))}
        color={
          themeMode === "light"
            ? theme.light.primaryBackground
            : theme.dark.secondaryBackground
        }
      >
        <Styled.Text
          color={
            themeMode === "light"
              ? theme.light.textColor
              : theme.general.colors.secondary
          }
          fontWeight={
            themeMode === "light"
              ? theme.general.fontWeight.lg
              : theme.general.fontWeight.md
          }
        >
          Light
        </Styled.Text>
        <Styled.Icon>
          <MdOutlineLightMode
            size={size}
            color={
              themeMode === "light"
                ? theme.light.textColor
                : theme.general.colors.secondary
            }
          />
        </Styled.Icon>
      </Styled.Row>
      <Styled.Row
        onClick={() => dispatch(addThemeMode("dark"))}
        color={
          themeMode === "light"
            ? theme.general.colors.highlitedMenuBackGround
            : theme.general.colors.primary
        }
      >
        <Styled.Text
          color={
            themeMode === "light"
              ? theme.general.colors.secondary
              : theme.dark.textColor
          }
          fontWeight={
            themeMode === "dark"
              ? theme.general.fontWeight.lg
              : theme.general.fontWeight.md
          }
        >
          Dark
        </Styled.Text>
        <Styled.Icon>
          <MdOutlineDarkMode
            size={size}
            color={
              themeMode === "light"
                ? theme.general.colors.secondary
                : theme.dark.textColor
            }
          />
        </Styled.Icon>
      </Styled.Row>
    </Styled.Container>
  );
};

export default ThemeToggler;
