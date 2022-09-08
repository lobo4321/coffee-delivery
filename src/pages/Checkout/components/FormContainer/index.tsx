import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethod";
import * as S from "./styles";

export function FormContainer() {
  const { yellow, purple } = useTheme();
  return (
    <S.Wrapper>
      <S.Title>Complete seu pedido</S.Title>
      <S.FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subTitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={yellow[300]} />}
        />
        <AddressForm />
      </S.FormSectionContainer>

      <S.FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={purple[200]} />}
        />
        <PaymentMethod />
      </S.FormSectionContainer>
    </S.Wrapper>
  );
}
