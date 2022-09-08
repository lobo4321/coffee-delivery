import { Intro } from "./components/Intro";
import { Items } from "./components/Items";

import * as S from "./styles";

export function Home() {
  return (
    <S.Wrapper>
      <Intro />
      <Items />
    </S.Wrapper>
  );
}
