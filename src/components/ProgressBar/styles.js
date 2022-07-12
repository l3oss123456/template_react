import styled, { keyframes } from "styled-components";

const progress_move = keyframes`
//  0% { height: 100px; width: 100px; }
//  30% { height: 400px; width: 400px; opacity: 1 }
//  40% { height: 405px; width: 405px; opacity: 0.3; }
//  100% { height: 100px; width: 100px; opacity: 0.6; }

0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 100%;
  }
`;

export default {
  Meter: styled.div`
    height: 20px;
    position: relative;
    background: #555;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
    background-position: left;
    // animation-name: ${progress_move};
    // animation-duration: 4s;
    // animation-iteration-count: infinite;
    // animation: ${progress_move} 5s linear 0s infinite;

    span {
      display: block;
      width: ${(props) => (props.progress ? `${props.progress}%` : "0%")};
      height: 100%;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      background-color: #f42323;
      box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
        inset 0 -2px 6px rgba(0, 0, 0, 0.4);
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      transition: 0.5s ease-out;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.2) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.2) 50%,
          rgba(255, 255, 255, 0.2) 75%,
          transparent 75%,
          transparent
        );
        z-index: 1;
        background-size: 50px 50px;
        animation: move 2s linear infinite;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow: hidden;
      }

      progress-text {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.colors.white};
      }
    }
  `,
};
