import { sideBarWidth } from "Styles/Constants";
import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  bottom: 0;
  display: flex;
  align-items: start;
  justify-content: center;
  position: fixed;
  width: 100%;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  position: relative;
  margin-left: ${sideBarWidth.toString() + `px`};
  background-color: ${(props) =>
    props.themeMode === "light"
      ? props.theme.light.secondaryBackground
      : props.theme.dark.primaryBackground};
`;
export const Pages = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.themeMode === "light"
      ? props.theme.light.secondaryBackground
      : props.theme.dark.primaryBackground};
`;
