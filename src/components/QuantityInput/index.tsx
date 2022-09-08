import { Minus, Plus } from "phosphor-react";

import { IQuantityInput } from "./typings";
import * as S from "./styles";

export function QuantityInput({
  onIncrease,
  onDecrease,
  size = "medium",
  quantity,
}: IQuantityInput) {
  return (
    <S.Wrapper size={size}>
      <S.IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </S.IconWrapper>
      <input type="number" readOnly value={quantity} />
      <S.IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </S.IconWrapper>
    </S.Wrapper>
  );
}
