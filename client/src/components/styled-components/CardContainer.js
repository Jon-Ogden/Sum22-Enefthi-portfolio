import styled, { keyframes } from "styled-components";
import { devices } from "./sizes";
import { COLORS } from "./styles";

export const CardContainer = styled.div`
  border: 1px solid ${COLORS.BLACK};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    background: red;
  }

  to {
    transform: rotate(180deg);
    background: blue;
  }
`;

export const Card = styled.div`
  min-width: 200px;
  max-width: 500px;
  height: 300px;
  border: 1px solid ${COLORS.BLACK};
  background: green;

  @media ${devices.tablet} {
    background: red;
    animation: ${rotate} 2s linear;
  }
`;
