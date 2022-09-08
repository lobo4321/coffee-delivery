import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  position: relative;

  > p {
    color: red;
  }
`;

interface IInputContainer {
  hasError: boolean;
}

export const InputContainer = styled.div<IInputContainer>`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.base.button};
  background: ${(props) => props.theme.base.input};
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border: 1px solid ${(props) => props.theme.yellow[300]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  height: 100%;
  background: none;
  border: 0;

  color: ${(props) => props.theme.base.text};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme.base.label};
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;

  color: ${(props) => props.theme.base.label};
`;
