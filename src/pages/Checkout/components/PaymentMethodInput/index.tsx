import { CreditCard } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

import * as S from "./styles";

type IPaymentMethodInput = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  IPaymentMethodInput
>(({ id, icon, label, ...props }, ref) => {
  return (
    <S.Wrapper>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <S.ContentContainer>
          {icon}
          {label}
        </S.ContentContainer>
      </label>
    </S.Wrapper>
  );
});
