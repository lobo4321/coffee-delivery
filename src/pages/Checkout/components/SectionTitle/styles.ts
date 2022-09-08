import styled from "styled-components";

export const SectionTitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Title = styled.h3`
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme.base.subTitle};
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  line-height: 130%;

  color: ${(props) => props.theme.base.text};
`;
