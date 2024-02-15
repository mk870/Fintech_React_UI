import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0px 20px;
  background-color: ${(props) =>
    props.themeMode === "light"
      ? props.theme.light.secondaryBackground
      : props.theme.dark.primaryBackground};
  @media (max-width: 410px) {
    padding: 0px 10px;
  }
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
