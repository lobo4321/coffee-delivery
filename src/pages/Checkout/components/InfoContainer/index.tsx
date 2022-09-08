import { useCart } from "../../../../hooks/useCart";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import * as S from "./styles";

export function InfoContainer() {
  const { cartItems } = useCart();

  return (
    <S.Wrapper>
      <S.Title>Cafés selecionados</S.Title>
      <S.Container>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </S.Container>
    </S.Wrapper>
  );
}
