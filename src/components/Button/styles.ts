import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 0.75rem 2.8rem;
  cursor: pointer;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  background: ${(props) => props.theme.yellow[200]};
  font-size: 0.875rem;

  border: 0;
  border-radius: 6px;

  text-transform: uppercase;

  transition: 0.4s;

  line-height: 1.3rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.yellow[300]};
  }
`;
