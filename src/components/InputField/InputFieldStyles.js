import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-sizing: border-box;
  gap: 1px;
  &:hover {
    cursor: pointer;
  }
`;
export const Label = styled.span`
  text-align: start;
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.general.fontSize.md};
  font-weight: ${({ theme }) => theme.general.fontWeight.lg};
`;
const boxShadow = css`
  box-shadow: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.boxShadow : "none"};
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid ${(props) => props.theme.general.colors.secondary};
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  display: flex;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.general.fontSize.md};
  text-align: left;
  ${({ isBoxShadow }) => isBoxShadow && boxShadow}
  color: ${({ theme }) => theme.general.colors.secondary};
  background-color: ${({ background }) => background};
`;
