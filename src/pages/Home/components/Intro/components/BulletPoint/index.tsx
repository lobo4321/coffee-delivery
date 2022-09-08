import * as S from "./styles";
import { IBulletPoint } from "./typings";

export function BulletPoint({ title, bulletColor, icon }: IBulletPoint) {
  return (
    <S.Wrapper>
      <S.Circle bulletColor={bulletColor}>{icon}</S.Circle>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}
