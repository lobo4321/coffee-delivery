import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.base.card};
  padding: 1.25rem;
  border-radius: 6px 36px;
  width: 256px;
  min-width: 256px;
`;

export const CoffeeImage = styled.img`
  display: block;
  margin: 0 auto;

  margin-top: -2.5rem;

  height: 7.5rem;
  width: 7.5rem;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`;

export const Tag = styled.div`
  font-weight: 700;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme.yellow[100]};
  color: ${(props) => props.theme.yellow[300]};

  margin-top: 0.75rem;
`;

export const Title = styled.h3`
  font-family: "Baloo 2";
  font-weight: 400;

  color: ${(props) => props.theme.base.subTitle};

  font-size: 1.25rem;

  margin-top: 1rem;
`;

export const SubTitle = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.base.label};

  line-height: 18.2px;

  margin-top: 0.5rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2rem;
`;

export const Price = styled.h3`
  font-size: 0.875rem;
  line-height: 18.2px;
  color: ${(props) => props.theme.base.text};

  span {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: "Baloo 2";
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 7.5rem;
`;

export const AmountContainer = styled.div`
  background: ${(props) => props.theme.base.button};

  padding: 0.5rem;

  display: flex;
  justify-content: space-between;
  border-radius: 6px;
`;

export const AmountTitle = styled.h5`
  color: ${(props) => props.theme.base.title};
  font-size: 1rem;
  line-height: 130%;
`;

export const CartButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.purple[300]};
  padding: 0.5rem;
  transition: 0.2s;
  border: 0;
  border-radius: 6px;
  width: 2.3rem;
  height: 2.3rem;

  &:hover {
    background: ${(props) => props.theme.purple[200]};
  }
`;
