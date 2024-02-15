import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 0px 5px;
  background-color: ${({ theme, themeMode }) =>
    themeMode === "light"
      ? theme.general.colors.highlitedMenuBackGround
      : theme.dark.secondaryBackground};
  &:hover {
    cursor: pointer;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 99%;
  height: 85%;
  border-radius: 4px;
  background-color: ${({ color }) => color};
`;
export const Icon = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 2px;
  margin-right: 2px;
  font-weight: ${({fontWeight}) => fontWeight};
  font-size: ${(props) => props.theme.general.fontSize.md};
  color: ${(props) => props.color};
`;
