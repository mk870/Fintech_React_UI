import React, { useState } from "react";
import reactDom from "react-dom";
import { useSelector } from "react-redux";

import * as styled from "./DrawerStyles";
import SideBar from "Layout/SideBar/SideBar";

const Drawer = ({ toggleMenu }) => {
  const [closeSideBar, setCloseSideBar] = useState(false);
  const themeMode = useSelector((state)=>state.user.value.themeMode)
  const closeDrawer = () => {
    setCloseSideBar((value) => !value);
    setTimeout(() => toggleMenu((value) => !value), 600);
  };
  return reactDom.createPortal(
    <>
      <styled.Overlay onClick={closeDrawer} />
      <styled.Container close={closeSideBar}>
       <SideBar themeMode={themeMode}/>
      </styled.Container>
    </>,
    document.getElementById("mobile-menu-drawer")
  );
};

export default Drawer;
