import { AppTheme } from "Styles/AppThemes";
import { IoSettings, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { IoHomeOutline, IoLeafOutline, IoLeafSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import {
  RiStockLine,
  RiStockFill,
  RiCoinsFill,
  RiCoinsLine,
  RiCurrencyFill,
  RiCurrencyLine,
  RiFeedbackFill,
  RiFeedbackLine,
  RiLoginBoxFill,
  RiLoginBoxLine,
} from "react-icons/ri";

import { urls } from "./AppURLs";
import { menuGroups } from "./Constants";

export const menuList = (clickedItem) => {
  const appThemes = AppTheme;
  const size = 20;
  const notHighlightedColor = appThemes.general.colors.secondary;
  const isHiglightedColor = appThemes.general.colors.primary;
  return [
    {
      name: "Home",
      route: urls.home,
      group: menuGroups.general,
      icon:
        clickedItem === urls.home ? (
          <AiFillHome color={isHiglightedColor} size={size} />
        ) : (
          <IoHomeOutline color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Stocks",
      route: urls.markets.stocks,
      group: menuGroups.markets,
      icon:
        clickedItem === urls.markets.stocks ? (
          <RiStockFill color={isHiglightedColor} size={size} />
        ) : (
          <RiStockLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Forex",
      route: urls.markets.forex,
      group: menuGroups.markets,
      icon:
        clickedItem === urls.markets.forex ? (
          <RiCurrencyFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCurrencyLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Crypto",
      route: urls.markets.crypto,
      group: menuGroups.markets,
      icon:
        clickedItem === urls.markets.crypto ? (
          <RiCoinsFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCoinsLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Commodities",
      route: urls.markets.commodities,
      group: menuGroups.markets,
      icon:
        clickedItem === urls.markets.commodities ? (
          <IoLeafSharp color={isHiglightedColor} size={size} />
        ) : (
          <IoLeafOutline color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Stocks",
      route: urls.watchLists.stocks,
      group: menuGroups.watchlist,
      icon:
        clickedItem === urls.watchLists.stocks ? (
          <RiStockFill color={isHiglightedColor} size={size} />
        ) : (
          <RiStockLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Forex",
      route: urls.watchLists.forex,
      group: menuGroups.watchlist,
      icon:
        clickedItem === urls.watchLists.forex ? (
          <RiCurrencyFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCurrencyLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Crypto",
      route: urls.watchLists.crypto,
      group: menuGroups.watchlist,
      icon:
        clickedItem === urls.watchLists.crypto ? (
          <RiCoinsFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCoinsLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Commodities",
      route: urls.watchLists.commodities,
      group: menuGroups.watchlist,
      icon:
        clickedItem === urls.watchLists.commodities ? (
          <IoLeafSharp color={isHiglightedColor} size={size} />
        ) : (
          <IoLeafOutline color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Stocks",
      route: urls.news.stocks,
      group: menuGroups.news,
      icon:
        clickedItem === urls.news.stocks ? (
          <RiStockFill color={isHiglightedColor} size={size} />
        ) : (
          <RiStockLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Forex",
      route: urls.news.forex,
      group: menuGroups.news,
      icon:
        clickedItem === urls.news.forex ? (
          <RiCurrencyFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCurrencyLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Crypto",
      route: urls.news.crypto,
      group: menuGroups.news,
      icon:
        clickedItem === urls.news.crypto ? (
          <RiCoinsFill color={isHiglightedColor} size={size} />
        ) : (
          <RiCoinsLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Commodities",
      route: urls.news.commodities,
      group: menuGroups.news,
      icon:
        clickedItem === urls.news.commodities ? (
          <IoLeafSharp color={isHiglightedColor} size={size} />
        ) : (
          <IoLeafOutline color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Give Feedback",
      route: urls.feedback,
      group: menuGroups.feedback,
      icon:
        clickedItem === urls.feedback ? (
          <RiFeedbackFill color={isHiglightedColor} size={size} />
        ) : (
          <RiFeedbackLine color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Settings",
      route: urls.settings,
      group: menuGroups.settings,
      icon:
        clickedItem === urls.settings ? (
          <IoSettings color={isHiglightedColor} size={size} />
        ) : (
          <IoSettingsOutline color={notHighlightedColor} size={size} />
        ),
    },
    {
      name: "Login",
      route: urls.login,
      group: menuGroups.login,
      icon:
        clickedItem === urls.login ? (
          <RiLoginBoxFill color={isHiglightedColor} size={size} />
        ) : (
          <RiLoginBoxLine color={notHighlightedColor} size={size} />
        ),
    }
  ];
};

export const toggleThemeMenuList = () => {
  const size = 12;
  return [
    {
      name: "Light",
      icon: <MdOutlineLightMode size={size} />,
      id: "light",
    },
    {
      name: "Dark",
      icon: <MdNightlight size={size} />,
      id: "dark",
    },
  ];
};
