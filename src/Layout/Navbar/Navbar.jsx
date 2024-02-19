import React, { useContext, useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useSelector } from "react-redux";

import * as styled from "./NavBarStyles";
import InputField from "components/InputField/InputField";
import { AppTheme } from "Styles/AppThemes";
import { AppContext } from "Context/AppContext";
import Drawer from "Layout/Views/MobileView/Drawer/Drawer";
import { useNavigate } from "react-router-dom";
import { urls } from "Utils/AppURLs";

const Navbar = ({ mobileView, screenSize }) => {
  const [searchItem, setSearchItem] = useState("");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate()
  const theme = AppTheme;
  const { accessToken } = useContext(AppContext);
  const onChange = (value) => {
    setSearchItem(value);
  };
  const onEnter = (value) => {
    console.log(value);
  };
  const inputWidth = () => {
    if (screenSize > 550) return "300px";
    else if (screenSize > 375) return "220px";
    else if (screenSize > 345) return "190px";
    else return "170px";
  };
  return (
    <styled.container themeMode={user.themeMode} mobileView={mobileView}>
      <styled.SectionOne mobileView={mobileView}>
        {mobileView && (
          <styled.mobileMenuIcon
            themeMode={user.themeMode}
            onClick={() => setOpenMobileMenu((value) => !value)}
          >
            <IoIosMenu
              color={theme.general.colors.secondary}
              size={screenSize < 550 ? 25 : 30}
            />
          </styled.mobileMenuIcon>
        )}
        {screenSize > 630 && (
          <styled.Title themeMode={user.themeMode} mobileView={mobileView}>
            Markets
          </styled.Title>
        )}
      </styled.SectionOne>
      <styled.SectionTwo mobileView={mobileView}>
        <InputField
          width={inputWidth()}
          height={screenSize < 550 ? "30px" : "35px"}
          type={"search"}
          handleOnChangeFunc={onChange}
          handleEnter={onEnter}
          placeHolder={"Search"}
          themeMode={user.themeMode}
          isBoxShadow={true}
          backgroundColor={
            user.themeMode === "light"
              ? theme.light.primaryBackground
              : theme.dark.secondaryBackground
          }
        />
        <styled.Icon
          color={
            user.themeMode === "light"
              ? theme.light.primaryBackground
              : theme.dark.secondaryBackground
          }
          themeMode={user.themeMode}
        >
          <CiBellOn size={25} color={theme.general.colors.secondary} />
        </styled.Icon>
        {accessToken ? (
          <styled.Profile color={user.themeColor}>MN</styled.Profile>
        ) : (
          <styled.Login onClick={()=>navigate(urls.login)}>Login</styled.Login>
        )}
      </styled.SectionTwo>
      {openMobileMenu && <Drawer toggleMenu={setOpenMobileMenu} />}
    </styled.container>
  );
};

export default Navbar;
