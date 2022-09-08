import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.yellow[300]};

  font-size: 2rem;
  font-family: "Baloo 2";
  font-weight: 800;
  line-height: 130%;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 130%;

  color: ${(props) => props.theme.base.subTitle};
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;

  border-radius: 6px 36px 6px 36px;

  background: ${(props) => props.theme.background};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoText = styled.h3`
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;

  color: ${(props) => props.theme.base.text};

  span {
    font-weight: 700;
  }
`;
const IconWrapper = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationWrapper = styled(IconWrapper)`
  background: ${(props) => props.theme.purple[200]};
`;
export const DeliveryWrapper = styled(IconWrapper)`
  background: ${(props) => props.theme.yellow[200]};
`;
export const PaymentWrapper = styled(IconWrapper)`
  background: ${(props) => props.theme.yellow[300]};
`;
