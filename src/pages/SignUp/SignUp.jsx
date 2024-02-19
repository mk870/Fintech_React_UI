import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import PageWrapperHOC from "HOCs/PageWrapper/PageWrapperHOC";
import { emailValidator, passwordValidator } from "Utils/UtilsFuncs";
import InputField from "components/InputField/InputField";
import * as styled from "./SignUpStyles";
import Button from "components/Button/Button";
import { passwordGuideLines } from "Utils/Constants";
import { PageContainer } from "pages/PageStyles";
import { AppTheme } from "Styles/AppThemes";

const SignUp = ({ themeMode, themes }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [givenName, setGivenName] = useState("");
  const [familyName, setfamilyName] = useState("");
  const handleEmailChange = (value) => setEmail(value);
  const handlePassWordChange = (value) => setPassword(value);
  const handleConfirmPassWordChange = (value) => setConfirmPassword(value);
  const handleGivenNameChange = (value) => setGivenName(value);
  const handleFamilyName = (value) => setfamilyName(value);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState(false);
  const [isEmailValidationError, setIsEmailValidationError] = useState(false);
  const [
    isConfirmPasswordValidationError,
    setIsConfirmPasswordValidationError,
  ] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => console.log("login");
  const backgroundColor =
    themeMode === "light"
      ? themes.light.secondaryBackground
      : themes.dark.secondaryBackground;
  useEffect(() => {
    if (password !== "") {
      passwordValidator(setIsPasswordValidationError, password);
    }else{
      setIsPasswordValidationError(false)
    }
  }, [password]);
  useEffect(() => {
    if (email !== "") {
      emailValidator(setIsEmailValidationError, email);
    }else{
      setIsEmailValidationError(false)
    }
  }, [email]);
  useEffect(() => {
    if(password && confirmPassword){
      if (password !== confirmPassword) {
        setIsConfirmPasswordValidationError(true);
      } else {
        setIsConfirmPasswordValidationError(false);
      }
    }else{
      setIsConfirmPasswordValidationError(false);
    }
  }, [confirmPassword]);
  const inputHeight = "53px";
  const theme = AppTheme;
  return (
    <PageContainer themeMode={themeMode}>
      <styled.Container themeMode={themeMode}>
        <styled.Header themeMode={themeMode}>Signup</styled.Header>
        <styled.subContainer>
          <InputField
            label={"given name"}
            handleOnChangeFunc={handleGivenNameChange}
            type={null}
            handleEnter={null}
            width={"100%"}
            height={inputHeight}
            themeMode={themeMode}
            value={givenName}
            backgroundColor={backgroundColor}
            isBoxShadow={false}
            placeHolder={"Given Name"}
          />
          <InputField
            label={"family name"}
            handleOnChangeFunc={handleFamilyName}
            type={null}
            handleEnter={null}
            width={"100%"}
            height={inputHeight}
            themeMode={themeMode}
            value={familyName}
            backgroundColor={backgroundColor}
            isBoxShadow={false}
            placeHolder={"Family Name"}
          />
          <InputField
            label={"email"}
            handleOnChangeFunc={handleEmailChange}
            type={null}
            handleEnter={null}
            width={"100%"}
            height={inputHeight}
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
            height={inputHeight}
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
          <InputField
            label={"confirm password"}
            handleOnChangeFunc={handleConfirmPassWordChange}
            type={"password"}
            handleEnter={null}
            width={"100%"}
            height={inputHeight}
            themeMode={themeMode}
            value={confirmPassword}
            backgroundColor={backgroundColor}
            isBoxShadow={false}
            placeHolder={"Confirm Password"}
          />
          {isConfirmPasswordValidationError && (
            <styled.validationErrorText>
              {"password is not identical"}
            </styled.validationErrorText>
          )}
        </styled.subContainer>
        <styled.Text>
          do you have an account?{" "}
          <styled.TextSpan onClick={() => navigate("/login")} themeMode={themeMode}>
            please login here
          </styled.TextSpan>
        </styled.Text>
        <styled.googleAuth themeMode={themeMode}>
          <FcGoogle size={25} />
          <styled.googleAuthTextWrapper>
            signup with google
          </styled.googleAuthTextWrapper>
        </styled.googleAuth>
        <Button
          text={"Signup"}
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

export default PageWrapperHOC(SignUp);
