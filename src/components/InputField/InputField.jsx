import React from "react";
import { CiSearch } from "react-icons/ci";
import { useTheme } from "styled-components";

import * as styled from "./InputFieldStyles";

const InputField = ({
  type,
  height,
  width,
  handleOnChangeFunc,
  handleEnter,
  placeHolder,
  value,
  label,
  themeMode,
  backgroundColor,
  isBoxShadow,
}) => {
  const theme = useTheme();
  const labelColor = theme.general.colors.secondary;
  return (
    <styled.InputContainer width={width} height={height}>
      {type === "search" && (
        <CiSearch
          fontSize={25}
          color={theme.general.colors.secondary}
          style={{ position: "absolute", right: "10px" }}
        />
      )}
      {label && <styled.Label color={labelColor}>{label}</styled.Label>}
      <styled.Input
        placeholder={placeHolder}
        onKeyDown={handleEnter ? (e) => handleEnter(e.key) : null}
        value={value}
        onChange={(e) => handleOnChangeFunc(e.target.value)}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        type={type }
        themeMode={themeMode}
        background={backgroundColor}
        isBoxShadow={isBoxShadow}
      />
    </styled.InputContainer>
  );
};

export default InputField;
