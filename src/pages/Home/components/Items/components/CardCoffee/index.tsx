import { ShoppingCart, Plus, Minus } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../../../components/QuantityInput";
import { useCart } from "../../../../../../hooks/useCart";
import { convertToReal } from "../../../../../../utils/formatPrice";

import * as S from "./styles";
import { ICoffee } from "./typings";

export function CardCoffee({ coffee }: ICoffee) {
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  function handleIncrease() {
    setQuantity((oldState) => oldState + 1);
  }
  function handleDecrease() {
    setQuantity((oldState) => oldState - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = convertToReal(coffee.price);

  return (
    <S.Wrapper>
      <S.CoffeeImage src={coffee.img} />
      <S.TagContainer>
        <S.Tag>{coffee.tag1}</S.Tag>
        {coffee.tag2 && <S.Tag>{coffee.tag2}</S.Tag>}
        {coffee.tag3 && <S.Tag>{coffee.tag3}</S.Tag>}
      </S.TagContainer>
      <S.Title>{coffee.title}</S.Title>
      <S.SubTitle>{coffee.subTitle}</S.SubTitle>
      <S.FooterContainer>
        <S.Price>
          R$ <span>{formattedPrice}</span>
        </S.Price>
        <S.FooterInfo>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <S.CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} color="#FFF" weight="fill" />
          </S.CartButton>
        </S.FooterInfo>
      </S.FooterContainer>
    </S.Wrapper>
  );
}
