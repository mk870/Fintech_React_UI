import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  margin-top: 10px;
  height: 100%;
  overflow-y:auto;
`;

export const TopSection = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  gap: 5px;
  flex: 1;
`;
export const LogoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 170px;
  height: 40px;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 0px 5px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

export const icon = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  margin-right: 6px;
`;

export const text = styled.span`
  text-align: center;
  font-weight: ${({ theme }) => theme.general.fontWeight.md};
  font-size: ${(props) => props.theme.general.fontSize.md};
  margin-top: 4px;
  color: ${(props) =>
    props.clicked
      ? props.theme.general.colors.primary
      : props.theme.general.colors.secondary};
`;
