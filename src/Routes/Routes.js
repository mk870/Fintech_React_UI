import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Profile from "pages/Profile/Profile";
import SignUp from "pages/SignUp/SignUp";

export const routesList = (accessToken) => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ];
  return { routes };
};
