import { sideBarWidth } from "Styles/Constants";
import styled from "styled-components";

export const Container = styled.div`
  bottom: 0;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  box-sizing:border-box;
  padding: 5px 15px 5px 20px;
  width: ${(sideBarWidth + 1).toString() + `px`};
  background-color: ${(props) =>
    props.themeMode === "light"
      ? props.theme.light.primaryBackground
      : props.theme.dark.tertiary};
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 170px;
`;
export const Image = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 7px;
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: ${(props) => props.theme.general.fontWeight.md};
  margin: 0 10px;
  color: ${({themeMode,theme})=> themeMode ==="light"? theme.light.textColor:theme.dark.textColor};
`;


