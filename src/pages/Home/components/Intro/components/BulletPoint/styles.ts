import styled from "styled-components";

import { IBulletPoint } from "./typings";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 15rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  color: ${(props) => props.theme.base.text};
  line-height: 130%;
  white-space: nowrap;
`;

export const Circle = styled.div<IBulletPoint>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${(props) => props.bulletColor};
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  min-height: 2rem;
`;
