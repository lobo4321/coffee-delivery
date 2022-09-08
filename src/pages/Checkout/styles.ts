import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  gap: 2rem;
  justify-content: space-between;

  margin-top: 2.5rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${(props) => props.theme.base.card};
  border-radius: 6px;
  padding: 2.5rem;
`;
