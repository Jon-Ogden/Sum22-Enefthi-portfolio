import styled from "styled-components";
import { Text } from "./Fonts";
import { COLORS } from "./styles";

// styled.element``
const ButtonContanier = styled.button`
  border: 1px solid ${COLORS.BLACK};
  border-radius: 8px;
  color: ${COLORS.BLACK};
  background: ${COLORS.WHITE};
  padding: 0 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    background: ${COLORS.BLACK};
  }
`;

const Button = (props) => {
  return (
    <ButtonContanier onClick={props.event}>
      <Text small dark>
        {props.children}
      </Text>
    </ButtonContanier>
  );
};

export default Button;
