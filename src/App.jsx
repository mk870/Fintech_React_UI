import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeWrapper from "HOCs/Theme/ThemeWrapper";
import { Globalstyles } from "Styles/GlobalStyles/GlobalStyles";
import Layout from "Layout/Layout";
import { routesList } from "Routes/Routes";
import { useLocaleStorage } from "Utils/useLocalStorage";
import { AppContext } from "Context/AppContext";

const App = () => {
  // const [accessToken, setAccessToken] = useLocaleStorage(null, "finWiseToken");
  const [accessToken, setAccessToken] = useState("ok");
  return (
    <AppContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      <BrowserRouter>
        <ThemeWrapper>
          <Globalstyles />
          <Layout>
            <Routes>
              {routesList("accessToken").routes.map((route, index) => (
                <Route key={index} element={route.element} path={route.path} />
              ))}
            </Routes>
          </Layout>
        </ThemeWrapper>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
