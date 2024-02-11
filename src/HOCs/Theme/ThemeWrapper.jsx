import { AppTheme } from "Styles/AppThemes";
import React from "react";
import { ThemeProvider } from "styled-components";

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
