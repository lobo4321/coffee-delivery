import { CardCoffee } from "./components/CardCoffee";
import { coffees } from "./items";
import * as S from "./styles";

export function Items() {
  return (
    <S.Wrapper>
      <S.Title>Nossos cafés</S.Title>
      <S.Container>
        {coffees.map((coffee) => {
          return <CardCoffee key={coffee.id} coffee={coffee} />;
        })}
      </S.Container>
    </S.Wrapper>
  );
}
