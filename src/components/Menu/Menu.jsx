import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";

import * as Styled from "./MenuStyles";
import { menuList } from "Utils/MenuList";
import { menuGroups } from "Utils/Constants";
import MenuGroup from "components/Menu/MenuGroup/MenuGroup";
import MenuGroupItems from "components/Menu/MenuGroupItems/MenuGroupItems";
import MenuItem from "components/Menu/MenuItem/MenuItem";
import ThemeToggler from "components/ThemeToggler/ThemeToggler";
import { AppContext } from "Context/AppContext";

const Menu = ({ themeMode }) => {
  const location = useLocation();
  const [clickedItem, setClickedItem] = useState(location.pathname);
  const [menuGroupOpened, setMenuGroupOpened] = useState(null);
  const [closeGroup, setCloseGroup] = useState(null);
  const theme = useTheme();
  const { accessToken, setAccessToken } = useContext(AppContext);
  const delayTime = 800;
  const stateChangeDelay = (groupName) => {
    if (menuGroupOpened === null) setMenuGroupOpened(groupName);
    else if (menuGroupOpened === groupName) {
      setCloseGroup(groupName);
      setTimeout(() => {
        setMenuGroupOpened(null);
        setCloseGroup(null);
      }, delayTime);
    } else {
      setCloseGroup(menuGroupOpened);
      setTimeout(() => {
        setMenuGroupOpened(groupName);
        setCloseGroup(null);
      }, delayTime);
    }
  };
  const logoutIconColor = () => {
    return theme.general.colors.secondary;
  };
  const color = (groupName) =>
    menuGroupOpened === groupName
      ? theme.general.colors.primary
      : theme.general.colors.secondary;
  return (
    <Styled.Container>
      <Styled.TopSection>
        {menuList(clickedItem)
          .filter((item) => item.group === menuGroups.general)
          .map((item) => (
            <MenuItem
              key={item.route}
              isClicked={clickedItem === item.route ? true : false}
              onClickFunc={() => setClickedItem(item.route)}
              item={item}
            />
          ))}
        <MenuGroup
          onClickFunc={() => stateChangeDelay(menuGroups.markets)}
          text={"Markets"}
          isMenuGroupOpen={
            menuGroupOpened === menuGroups.markets ? true : false
          }
          iconColor={color(menuGroups.markets)}
        />
        {menuGroupOpened === menuGroups.markets && (
          <MenuGroupItems
            listItems={menuList(clickedItem).filter(
              (item) => item.group === menuGroups.markets
            )}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
            isClosed={closeGroup === menuGroups.markets ? true : false}
          />
        )}
        <MenuGroup
          onClickFunc={() => stateChangeDelay(menuGroups.news)}
          text={"News"}
          isMenuGroupOpen={menuGroupOpened === menuGroups.news ? true : false}
          iconColor={color(menuGroups.news)}
        />
        {menuGroupOpened === menuGroups.news && (
          <MenuGroupItems
            listItems={menuList(clickedItem).filter(
              (item) => item.group === menuGroups.news
            )}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
            isClosed={closeGroup === menuGroups.news ? true : false}
          />
        )}
        <MenuGroup
          onClickFunc={() => stateChangeDelay(menuGroups.watchlist)}
          text={"Watchlists"}
          isMenuGroupOpen={
            menuGroupOpened === menuGroups.watchlist ? true : false
          }
          iconColor={color(menuGroups.watchlist)}
        />
        {menuGroupOpened === menuGroups.watchlist && (
          <MenuGroupItems
            listItems={menuList(clickedItem).filter(
              (item) => item.group === menuGroups.watchlist
            )}
            clickedItem={clickedItem}
            setClickedItem={setClickedItem}
            isClosed={closeGroup === menuGroups.watchlist ? true : false}
          />
        )}
        {menuList(clickedItem)
          .filter((item) => item.group === menuGroups.feedback)
          .map((item) => (
            <MenuItem
              key={item.route}
              isClicked={clickedItem === item.route ? true : false}
              onClickFunc={() => setClickedItem(item.route)}
              item={item}
            />
          ))}
        {menuList(clickedItem)
          .filter((item) => item.group === menuGroups.settings)
          .map((item) => (
            <MenuItem
              key={item.route}
              isClicked={clickedItem === item.route ? true : false}
              onClickFunc={() => setClickedItem(item.route)}
              item={item}
            />
          ))}
        {!accessToken ? (
          menuList(clickedItem)
            .filter((item) => item.group === menuGroups.login)
            .map((item) => (
              <MenuItem
                key={item.route}
                isClicked={clickedItem === item.route ? true : false}
                onClickFunc={() => setClickedItem(item.route)}
                item={item}
              />
            ))
        ) : (
          <Styled.LogoutWrapper onClick={() => setAccessToken(null)}>
            <Styled.icon>
              <RiLogoutBoxRLine color={logoutIconColor()} size={20} />
            </Styled.icon>
            <Styled.text>Logout</Styled.text>
          </Styled.LogoutWrapper>
        )}
      </Styled.TopSection>
      <ThemeToggler themeMode={themeMode} />
    </Styled.Container>
  );
};

export default Menu;
