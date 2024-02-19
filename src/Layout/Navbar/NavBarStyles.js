import styled from "styled-components";

export const container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ mobileView }) => (mobileView ? "10px 0px" : "10px 10px")};
  width: 100%;
  height: 90px;
  box-sizing: border-box;
  border-bottom: 1px solid
    ${({ themeMode }) =>
      themeMode === "light" ? "#C9CECC" : "rgba(49, 48, 47, 1)"};
  @media (max-width: 550px) {
    gap: 10px;
  }
`;
export const SectionOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  @media (max-width: 950px) {
    gap: 30px;
  }
  @media (max-width: 550px) {
    padding: 0px;
  }
`;
export const mobileMenuIcon = styled.div`
  padding: 5px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.boxShadow : "none"};
  background-color: ${({ theme, themeMode }) =>
    themeMode === "light"
      ? theme.light.primaryBackground
      : theme.dark.secondaryBackground};
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.general.fontSize.xlg};
  font-weight: ${({ theme }) => theme.general.fontWeight.lg};
  color: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.textColor : theme.dark.textColor};
`;

export const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  margin-right: 5px;
  gap: 20px;
  @media (max-width: 470px) {
    gap: 10px;
  }
  @media (max-width: 325px) {
    gap: 8px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  height: 35px;
  width: 35px;
  border-radius: 5px;
  box-shadow: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.boxShadow : "none"};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 550px) {
    height: 30px;
    width: 30px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  height: 35px;
  width: 35px;
  color: white;
  font-size: ${({ theme }) => theme.general.fontSize.md};
  @media (max-width: 550px) {
    height: 30px;
    width: 30px;
    font-size: ${({ theme }) => theme.general.fontSize.sm};
  }
  @media (max-width: 330px) {
    margin-left: 0px;
  }
`;
export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.general.colors.primary};
  border-radius: 5px;
  height: 35px;
  width: 65px;
  color: white;
  font-size: ${({ theme }) => theme.general.fontSize.md};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.general.button.onHover.normal};
  }
  @media (max-width: 550px) {
    font-size: ${({ theme }) => theme.general.fontSize.sm};
    height: 30px;
    width: 55px;
  }
  @media (max-width: 400px) {
    width: 45px;
  }
  @media (max-width: 380px) {
    width: 40px;
  }
  @media (max-width: 318px) {
    width: 35px;
    font-size: ${({ theme }) => theme.general.fontSize.xsm};
  }
`;
