import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 6.75rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-weight: 800;
  line-height: 130%;
  color: ${(props) => props.theme.base.subTitle};
`;

export const Container = styled.div`
  display: flex;
  gap: 2.5rem 1.3rem;
  flex-wrap: wrap;

  margin-top: 2.125rem;
`;
