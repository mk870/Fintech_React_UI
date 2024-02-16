import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 100%;
  color: ${({ theme, themeMode }) =>
    themeMode === "light" ? theme.light.textColor : theme.dark.textColor};
`;