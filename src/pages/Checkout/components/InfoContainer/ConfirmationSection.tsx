import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { convertToReal } from "../../../../utils/formatPrice";
import * as S from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItensTotal = convertToReal(cartItemsTotal);
  const formattedCartTotal = convertToReal(cartTotal);
  const formattedDelivery = convertToReal(DELIVERY_PRICE);

  return (
    <S.ConfirmationSectionContainer>
      <div>
        <S.ConfirmationLabel>Total de itens</S.ConfirmationLabel>
        <S.ConfirmationInfo>R$ {formattedItensTotal}</S.ConfirmationInfo>
      </div>
      <div>
        <S.ConfirmationLabel>Entrega</S.ConfirmationLabel>
        <S.ConfirmationInfo>R$ {formattedDelivery}</S.ConfirmationInfo>
      </div>
      <div>
        <S.ConfirmationTotal>Total</S.ConfirmationTotal>
        <S.ConfirmationTotal>R$ {formattedCartTotal}</S.ConfirmationTotal>
      </div>

      <Button disabled={cartQuantity <= 0} type="submit">
        confirmar pedido
      </Button>
    </S.ConfirmationSectionContainer>
  );
}
