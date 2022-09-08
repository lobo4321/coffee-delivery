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
  color: ${(props) => props.theme.base.subTitle};
  font-family: "Baloo 2";
  line-height: 130%;
  font-weight: 700;
`;

export const Container = styled(SectionBaseStyle)`
  border-radius: 6px 44px 6px 44px;
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    margin-top: 0.7rem;
  }
`;

export const ConfirmationLabel = styled.h3`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base.text};
  font-weight: 400;

  line-height: 130%;
`;

export const ConfirmationInfo = styled.h3`
  color: ${(props) => props.theme.base.text};
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;
`;

export const ConfirmationTotal = styled.h2`
  color: ${(props) => props.theme.base.subTitle};

  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`;
