import styled from "styled-components";


export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Label = styled.span`
  text-align: start;
  color: green;
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.general.colors.secondary};
  border: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 6px;
  display: flex;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.general.fontSize.md};
  text-align: left;
  box-shadow: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.boxShadow : "none"};
  color: ${({ theme }) => theme.general.colors.secondary};
  background-color: ${({ theme, themeMode }) =>
    themeMode === "light"
      ? theme.light.primaryBackground
      : theme.dark.secondaryBackground};
`;
