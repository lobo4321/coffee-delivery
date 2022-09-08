import styled, { css } from "styled-components";

import { IQuantityInput } from "./typings";

type IWrapper = {
  size: "small" | "medium";
};

export const Wrapper = styled.div<IWrapper>`
  flex: 1;
  background: ${(props) => props.theme.base.button};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: 0;
    color: ${(props) => props.theme.base.title};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: 0;
  background: none;
  cursor: pointer;

  color: ${(props) => props.theme.purple[200]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${(props) => props.theme.purple[300]};
  }
`;
