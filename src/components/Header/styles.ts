import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Button = styled.button`
  cursor: pointer;
  border: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  border-radius: 6px;
`;

export const ButtonRegion = styled(Button)`
  background: ${(props) => props.theme.purple[100]};
  color: ${(props) => props.theme.purple[300]};
  font-size: 0.875rem;
  line-height: 130%;

  cursor: inherit;
`;

export const ButtonCart = styled(Button)`
  background: ${(props) => props.theme.yellow[100]};
  position: relative;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow[300]};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
  }
`;
