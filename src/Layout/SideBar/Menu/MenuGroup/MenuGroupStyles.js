import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 5px;
  border-radius: 7px;
  background-color: ${(props) =>props.color};
  &:hover {
    cursor: pointer;
  }
`;

export const row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const icon = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
`;
export const text = styled.span`
  text-align: center;
  margin-top: 2px;
  font-weight: ${(props) => props.theme.general.fontWeight.md};
  font-size: ${(props) => props.theme.general.fontSize.md};
  color: ${(props) => props.theme.general.colors.secondary};
`;
