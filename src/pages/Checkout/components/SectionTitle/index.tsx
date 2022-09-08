import { ISectionTitle } from "./typings";
import * as S from "./styles";

export function SectionTitle({ icon, subTitle, title }: ISectionTitle) {
  return (
    <S.SectionTitleContainer>
      {icon}
      <div>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </div>
    </S.SectionTitleContainer>
  );
}
