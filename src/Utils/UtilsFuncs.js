export const generateRandomColor = () => {
  let maxVal = 0xffffff;
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
};
export const passwordValidator = (
  setIsPasswordValidationError,
  passwordValue
) => {
  const regexPasswordValidator = new RegExp(
    "^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  if (regexPasswordValidator.test(passwordValue)) {
    setIsPasswordValidationError(false);
  } else {
    setIsPasswordValidationError(true);
  }
};

export const emailValidator = (setIsEmailValidationError, emailValue) => {
  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailValue
    )
  ) {
    setIsEmailValidationError(true);
  } else {
    setIsEmailValidationError(false);
  }
};
