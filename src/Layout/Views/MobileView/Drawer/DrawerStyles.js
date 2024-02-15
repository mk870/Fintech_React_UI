import { sideBarWidth } from "Styles/Constants";
import styled, { css, keyframes } from "styled-components";

const width = sideBarWidth.toString() + "px";

const slideOut = keyframes`
  0% { transform: translateX(0%);}
  100% { transform: translateX(-100%);}
`;

const slideIn = keyframes`
0% { transform: translateX(-100%);}
100% { transform: translateX(0%);}
`;
const slideInAnimation = css`
  animation: ${slideIn} 0.6s ease;
`;
const slideOutAnimation = css`
  animation: ${slideOut} 0.6s ease;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 0%;
  bottom: 0%;
  width: ${width};
  z-index: 300;
  overflow-y:auto;
  ${({ close }) => (close ? slideOutAnimation : slideInAnimation)}
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: all;
`;
