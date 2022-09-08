import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  width: 100%;
`;

export const ContainerInfo = styled.div``;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-weight: 800;
  font-size: 3rem;
  line-height: 130%;
  color: ${(props) => props.theme.base.title};
`;
export const SubTitle = styled.p`
  color: ${(props) => props.theme.base.subTitle};
  line-height: 130%;
  font-size: 1.25rem;
  margin-top: 1rem;
`;

export const ContainerBullet = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 4.125rem;
  gap: 1.25rem;
`;

export const CoffeeImage = styled.img`
  width: 100%;
  height: 100%;
`;
