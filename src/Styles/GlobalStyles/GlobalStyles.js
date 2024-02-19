import { AppTheme } from "Styles/AppThemes";
import { createGlobalStyle } from "styled-components";

const themes = AppTheme;

export const Globalstyles = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
    color: black;
    background-color:${({ themeMode }) =>
      themeMode === "light"
        ? themes.light.secondaryBackground
        : themes.dark.primaryBackground};
    margin:0;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:0;
    box-sizing: border-box;
    overflow-x:hidden;
  }`;
