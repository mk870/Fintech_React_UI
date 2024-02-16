import styled, { css, keyframes } from "styled-components";

const slideDown = keyframes`
  0% { margin-top:-25px;}
  100% { margin-top:0px;}
`;

const slideUp = keyframes`
  0% { margin-top:0px;border-left: none}
  100% { margin-top:-155px;}
`;
const appear = keyframes`
  0% { opacity:0;}
  100% { opacity:1;}
`;
const disappear = keyframes`
  0% { opacity:1;}
  100% { opacity:0;}
`;
const slideDownAnimation = css`
  animation: ${slideDown} 0.5s linear;
`;

const slideUpAnimation = (animationTime) => {
  return css`
    animation: ${slideUp} 0.6s linear 0.2s;
  `;
};
const disappearAnimation = (animationTime) => {
  return css`
    animation: ${disappear} 0.3s linear;
  `;
};

export const Container = styled.div`
  ${slideDownAnimation}
  ${({ isClosed, animationTime }) =>
    isClosed && slideUpAnimation(animationTime)}
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  border-left: ${({ theme, isClosed, themeMode }) =>
    isClosed
      ? "none"
      : `1px solid ${
          themeMode === "light"
            ? theme.general.colors.secondary
            : theme.general.colors.primary
        }`};
  border-bottom-left-radius: 17px;
`;
export const row = styled.div`
  animation: ${appear} ${({ animationTime }) => animationTime} linear;
  ${({ isClosed, animationTime }) =>
    isClosed && disappearAnimation(animationTime)}
  display: flex;
  align-items: center;
  justify-content: start;
  width: 150px;
  height: 40px;
  opacity: ${({ isClosed }) => (isClosed ? 0 : 1)};
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
  margin-top: 3px;
  font-weight: ${(props) => props.theme.general.fontWeight.md};
  font-size: ${(props) => props.theme.general.fontSize.md};
  color: ${(props) =>
    props.clicked
      ? props.theme.general.colors.primary
      : props.theme.general.colors.secondary};
`;
