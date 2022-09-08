import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { ICartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { convertToReal } from "../../../../utils/formatPrice";

import * as S from "./styles";

interface ICoffeeCartCard {
  coffee: ICartItem;
}

export function CoffeeCartCard({ coffee }: ICoffeeCartCard) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = convertToReal(coffeeTotal);

  return (
    <S.Wrapper>
      <div>
        <S.ImageContainer>
          <img src={coffee.img} />
        </S.ImageContainer>

        <div>
          <S.CoffeeName>{coffee.title}</S.CoffeeName>
          <S.ActionsContainer>
            <QuantityInput
              size="small"
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <S.RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </S.RemoveButton>
          </S.ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </S.Wrapper>
  );
}
