import React from "react";

import * as Styled from "./SideBarStyles";
import logo from "../../../../Assets/logo.png";
import Menu from "components/Menu/Menu";

const SideBar = ({ themeMode }) => {
  return (
    <Styled.Container themeMode={themeMode}>
      <Styled.LogoWrapper>
        <Styled.Image src={logo} alt="logo" />
      </Styled.LogoWrapper>
        <Menu themeMode={themeMode}/>
    </Styled.Container>
  );
};

export default SideBar;
