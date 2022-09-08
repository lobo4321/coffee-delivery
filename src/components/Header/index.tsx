import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import LogoCoffee from "../../assets/logo-coffee.svg";

import * as S from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <S.Wrapper>
      <NavLink to="/" title="Home">
        <img src={LogoCoffee} alt="" />
      </NavLink>
      <S.Container>
        <S.ButtonRegion>
          <MapPin color="#8047F8" size={22} weight="fill" />
          Porto Alegre, RS
        </S.ButtonRegion>
        <NavLink to="/checkout" title="Checkout">
          <S.ButtonCart>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </S.ButtonCart>
        </NavLink>
      </S.Container>
    </S.Wrapper>
  );
}
