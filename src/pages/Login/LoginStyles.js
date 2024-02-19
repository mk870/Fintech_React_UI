import { AppTheme } from "Styles/AppThemes";
import styled from "styled-components";
const theme = AppTheme;

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 15px;
  margin-top: 40px;
  gap: 20px;
  width: 400px;
  background-color: ${({ themeMode, theme }) =>
    themeMode === "light"
      ? theme.light.primaryBackground
      : theme.dark.tertiary};
  @media (max-width: 600px) {
   width: 300px;
  }
  @media (max-width: 350px) {
   width: 90%;
  }
`;

export const Header = styled.span`
  color: ${({ themeMode, theme }) =>
    themeMode === "light" ? theme.light.textColor : theme.dark.textColor};
  font-size: ${({ theme }) => theme.general.fontSize.xlg};
  font-weight: ${({ theme }) => theme.general.fontWeight.xlg};
  text-align: start;
  margin-bottom: 0px;
`;
export const subContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  gap: 15px;
`;
export const validationErrorWrapper = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  color: ${theme.general.colors.red};
  font-size: ${theme.general.fontSize.sm};
  margin-top: -10px;
  margin-left: -15px;
`;
export const validationErrorText = styled.span`
  text-align: center;
  color: ${theme.general.colors.red};
  font-size: ${theme.general.fontSize.sm};
  margin-top: -10px;
`;
export const validationErrorGuidelines = styled.span`
  text-align: center;
  color: ${theme.general.colors.red};
  font-size: ${theme.general.fontSize.sm};
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: ${theme.general.fontSize.sm};
  color:${theme.general.colors.secondary};
`;

export const TextSpan = styled.span`
  font-size: ${theme.general.fontSize.sm};
  color: ${({ themeMode }) =>
    themeMode === "dark"
      ? theme.general.button.onHover.normal
      : theme.general.colors.primary};
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
export const googleAuth = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  background-color: ${({ themeMode }) =>
    themeMode === "light"
      ? theme.light.primaryBackground
      : theme.dark.tertiary};
  font-size: ${theme.general.fontSize.sm};
  border-radius: 5px;
  border: 1px solid ${theme.general.colors.secondary};
  margin-top: -20px;
  &:hover {
    cursor: pointer;
  }
`;
export const googleAuthTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 0px 5px;
  color: ${theme.dark.textColor};
  background-color: #618af0;
  height: 100%;
  font-size: ${theme.general.fontSize.sm};
`;