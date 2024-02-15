import React from "react";
import { ThemeProvider } from "styled-components";

import { AppTheme } from "Styles/AppThemes";

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={AppTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
