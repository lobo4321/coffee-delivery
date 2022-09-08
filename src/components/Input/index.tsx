import { forwardRef } from "react";
import * as S from "./styles";
import { IInput } from "./typings";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <S.InputWrapper className={className}>
        <S.InputContainer hasError={!!error}>
          <S.InputStyled {...props} ref={ref} />
          {rightText && <S.RightText>{rightText}</S.RightText>}
        </S.InputContainer>
        {error && <p>{error}</p>}
      </S.InputWrapper>
    );
  }
);
