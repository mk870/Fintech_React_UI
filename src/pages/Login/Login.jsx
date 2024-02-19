import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PageWrapperHOC from "HOCs/PageWrapper/PageWrapperHOC";
import { PageContainer } from "pages/PageStyles";
import * as styled from "./LoginStyles";
import InputField from "components/InputField/InputField";
import Button from "components/Button/Button";
import { emailValidator, passwordValidator } from "Utils/UtilsFuncs";
import { passwordGuideLines } from "Utils/Constants";
import { FcGoogle } from "react-icons/fc";
import { urls } from "Utils/AppURLs";

const Login = ({ themeMode, themes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (value) => setEmail(value);
  const handlePassWordChange = (value) => setPassword(value);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => console.log("login");
  const backgroundColor =
    themeMode === "light"
      ? themes.light.secondaryBackground
      : themes.dark.secondaryBackground;
  useEffect(() => {
    if (password !== "") {
      passwordValidator(setIsPasswordValidationError, password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [password]);
  useEffect(() => {
    if (email !== "") {
      emailValidator(setIsEmailValidationError, email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [email]);
  return (
    <PageContainer themeMode={themeMode}>
      <styled.Container themeMode={themeMode}>
        <styled.Header themeMode={themeMode}>Login</styled.Header>
        <styled.subContainer>
          <InputField
            label={"email"}
            handleOnChangeFunc={handleEmailChange}
            type={null}
            handleEnter={null}
            width={"100%"}
            height={"55px"}
            themeMode={themeMode}
            value={email}
            backgroundColor={backgroundColor}
            isBoxShadow={false}
            placeHolder={"Email"}
          />
          {isEmailValidationError && (
            <styled.validationErrorText>
              {"please enter valid email address"}
            </styled.validationErrorText>
          )}
          <InputField
            label={"password"}
            handleOnChangeFunc={handlePassWordChange}
            type={"password"}
            handleEnter={null}
            width={"100%"}
            height={"55px"}
            themeMode={themeMode}
            value={password}
            backgroundColor={backgroundColor}
            isBoxShadow={false}
            placeHolder={"Password"}
          />
          {isPasswordValidationError && (
            <styled.validationErrorWrapper>
              <styled.validationErrorGuidelines>
                {"password guidelines:"}
              </styled.validationErrorGuidelines>
              {passwordGuideLines.map((guideline) => (
                <li key={guideline}>
                  <span>{guideline}</span>
                </li>
              ))}
            </styled.validationErrorWrapper>
          )}
        </styled.subContainer>
        <styled.Text>
          you don't have an account?{" "}
          <styled.TextSpan
            onClick={() => navigate(urls.signup)}
            themeMode={themeMode}
          >
            please signup here
          </styled.TextSpan>
        </styled.Text>
        <styled.googleAuth themeMode={themeMode}>
          <FcGoogle size={25} />
          <styled.googleAuthTextWrapper themeMode={themeMode}>
            login with google
          </styled.googleAuthTextWrapper>
        </styled.googleAuth>
        <Button
          text={"login"}
          onClickFunc={handleLogin}
          width={"100%"}
          height={"35px"}
          backgroundColor={themes.general.colors.primary}
          hoverBackgroundColor={themes.general.button.onHover.normal}
        />
      </styled.Container>
    </PageContainer>
  );
};

export default PageWrapperHOC(Login);
