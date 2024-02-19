import styled, { keyframes } from "styled-components";

const appear = keyframes`
0%{opacity:0;}
100%{opacity:1}
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  padding: 20px 0px;
  height: 100%;
  width: 100%;
  animation: ${appear} 1.5s ease;
  color: ${({ theme, themeMode }) =>
    themeMode === "light" ? theme.light.textColor : theme.dark.textColor};
`;
