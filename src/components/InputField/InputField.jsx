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
}) => {
  const theme = useTheme();
  return (
    <styled.InputContainer>
      {type === "search" && (
        <CiSearch
          fontSize={25}
          color={theme.general.colors.secondary}
          style={{ position: "absolute", right: "10px" }}
        />
      )}
      {label && <styled.Label>{label}</styled.Label>}
      <styled.Input
        placeholder={placeHolder}
        onKeyDown={(e) => handleEnter(e.key)}
        value={value}
        width={width}
        height={height}
        onChange={(e) => handleOnChangeFunc(e.target.value)}
        spellCheck="false"
        autoCorrect="off"
        autoComplete="off"
        themeMode={themeMode}
      />
    </styled.InputContainer>
  );
};

export default InputField;
