import { urls } from "Utils/AppURLs";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Commodities from "pages/Markets/Commodities";
import Crypto from "pages/Markets/Crypto";
import Forex from "pages/Markets/Forex";
import Stocks from "pages/Markets/Stocks";
import SignUp from "pages/SignUp/SignUp";

export const routesList = (accessToken) => {
  const routes = [
    { path: urls.home, element: <Home /> },
    { path: urls.login, element: <Login /> },
    { path: urls.signup, element: <SignUp /> },
    { path: urls.markets.forex, element: <Forex /> },
    { path: urls.markets.stocks, element: <Stocks /> },
    { path: urls.markets.commodities, element: <Commodities /> },
    { path: urls.markets.crypto, element: <Crypto /> },
  ];
  return { routes };
};
