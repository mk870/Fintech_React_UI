import React from "react";
import * as styled from "./PageWrapperHOCstyles";
import { useSelector } from "react-redux";
import { AppTheme } from "Styles/AppThemes";

const PageWrapperHOC = (Page) => {
  const usePageWrapper = (props) => {
    const themeMode = useSelector((state) => state.user.value.themeMode);
    const themes = AppTheme;
    return (
      <styled.Container>
        <Page {...props} themeMode={themeMode} themes={themes} />
      </styled.Container>
    );
  };
  return usePageWrapper;
};

export default PageWrapperHOC;
