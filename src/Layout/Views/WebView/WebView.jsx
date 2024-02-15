import React from "react";

import * as styled from "./WebViewStyles";
import SideBar from "../../SideBar/SideBar";
import Navbar from "Layout/Navbar/Navbar";

const WebView = ({ children, themeMode, mobileView, screenSize }) => {
  return (
    <styled.Container themeMode={themeMode}>
      <SideBar themeMode={themeMode} />
      <styled.SubContainer themeMode={themeMode}>
        <Navbar mobileView={mobileView} screenSize={screenSize} />
        <styled.Pages themeMode={themeMode}>{children}</styled.Pages>
      </styled.SubContainer>
    </styled.Container>
  );
};

export default WebView;
