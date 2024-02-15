import React from "react";

import * as styled from "./MobileViewStyles";
import Navbar from "Layout/Navbar/Navbar";

const MobileView = ({ children, mobileView, themeMode, screenSize }) => {
  return (
    <styled.Container themeMode={themeMode}>
      <Navbar mobileView={mobileView} screenSize={screenSize} />
      <styled.Pages themeMode={themeMode}>{children}</styled.Pages>
    </styled.Container>
  );
};

export default MobileView;
