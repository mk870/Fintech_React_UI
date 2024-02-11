import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AppInitHOC = (WrappedComponent) => {
  const useWrapper = (props) => {
    const themeMode = useSelector((state) => state.user.value.themeMode);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [screenSize, setScreenSize] = useState(0);
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
      if (screenSize) {
        if (screenSize <= 920) {
          setMobileMenu(true);
        } else {
          setMobileMenu(false);
        }
      }
    }, [screenSize]);
    return (
      <WrappedComponent
        themeMode={themeMode}
        screenSize={screenSize}
        mobileMenu={mobileMenu}
        {...props}
      />
    );
  };
  return useWrapper;
};

export default AppInitHOC;
