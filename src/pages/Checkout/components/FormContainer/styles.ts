import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  width: 40rem;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-family: "Baloo 2";
  line-height: 130%;
  color: ${(props) => props.theme.base.subTitle};
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;

  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    color: red;
    grid-column: span 3;
  }
`;
