import styled from "styled-components";

export const Container = styled.button`
  border: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 6px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  &:hover {
    cursor: pointer;
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;

export const text = styled.span`
  font-size: ${(props) => props.theme.general.fontSize.md};
  color: white;
  margin: 0;
`;
