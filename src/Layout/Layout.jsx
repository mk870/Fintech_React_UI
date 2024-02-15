import React from "react";

import AppInitHOC from "HOCs/AppInitialization/AppInitHOC";
import * as styled from "./LayoutStyles";
import MobileView from "./Views/MobileView/MobileView";
import WebView from "./Views/WebView/WebView";

const Layout = ({ children, themeMode, mobileMenu, screenSize }) => {
  return (
    <styled.container>
      {mobileMenu ? (
        <MobileView
          themeMode={themeMode}
          mobileView={mobileMenu}
          screenSize={screenSize}
        >
          {children}
        </MobileView>
      ) : (
        <WebView
          themeMode={themeMode}
          mobileView={mobileMenu}
          screenSize={screenSize}
        >
          {children}
        </WebView>
      )}
    </styled.container>
  );
};

export default AppInitHOC(Layout);
