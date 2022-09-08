import { ShoppingCart, Package, Coffee, Timer } from "phosphor-react";

import { BulletPoint } from "./components/BulletPoint";
import CoffeeImage from "../../../../assets/coffee-home.svg";

import * as S from "./styles";

export function Intro() {
  return (
    <S.Wrapper>
      <S.ContainerInfo>
        <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>
        <S.SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </S.SubTitle>
        <S.ContainerBullet>
          <BulletPoint
            bulletColor="#C47F17"
            title="Compra simples e segura"
            icon={<ShoppingCart size={16} color="#FFF" weight="fill" />}
          />
          <BulletPoint
            bulletColor="#574F4D"
            title="Embalagem mantém o café intacto"
            icon={<Package size={16} color="#FFF" weight="fill" />}
          />
          <BulletPoint
            bulletColor="#DBAC2C"
            title="Entrega rápida e rastreada"
            icon={<Timer size={16} color="#FFF" weight="fill" />}
          />
          <BulletPoint
            bulletColor="#8047F8"
            title="O café chega fresquinho até você"
            icon={<Coffee size={16} color="#FFF" weight="fill" />}
          />
        </S.ContainerBullet>
      </S.ContainerInfo>
      <S.CoffeeImage src={CoffeeImage} alt="Coffee Image" />
    </S.Wrapper>
  );
}
