import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ThemeWrapper from "HOCs/Theme/ThemeWrapper";
import { Globalstyles } from "Styles/GlobalStyles/GlobalStyles";
import Layout from "Layout/Layout";
import { routesList } from "Routes/Routes";

const App = () => {
  return (
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
  );
};

export default App;
