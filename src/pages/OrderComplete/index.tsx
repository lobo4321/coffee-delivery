import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import OrderCompletedImage from "../../assets/order-completed.svg";
import { IOrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/FormContainer/PaymentMethod";

import * as S from "./styles";
interface ILocationType {
  state: IOrderData;
}

export function OrderComplete() {
  const { state } = useLocation() as unknown as ILocationType;

  console.log(state);

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <S.Wrapper>
      <div>
        <S.Title>Uhu! Pedido confirmado</S.Title>
        <S.SubTitle>
          Agora é só aguardar que logo o café chegará até você
        </S.SubTitle>
      </div>
      <section>
        <S.OrderDetailsContainer>
          <S.InfoWrapper>
            <S.LocationWrapper>
              <MapPin color="#FFF" weight="fill" size={16} />
            </S.LocationWrapper>
            <div>
              <S.InfoText>
                Entrega em{" "}
                <span>
                  {state.street}, {state.number}
                </span>
              </S.InfoText>
              <S.InfoText>
                {state.district} - {state.city}, {state.uf}
              </S.InfoText>
            </div>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.DeliveryWrapper>
              <Clock color="#FFF" weight="fill" size={16} />
            </S.DeliveryWrapper>
            <div>
              <S.InfoText>Previsão de entrega</S.InfoText>
              <S.InfoText>
                <span>20 min - 30 min </span>
              </S.InfoText>
            </div>
          </S.InfoWrapper>
          <S.InfoWrapper>
            <S.DeliveryWrapper>
              <CurrencyDollar color="#FFF" weight="fill" size={16} />
            </S.DeliveryWrapper>
            <div>
              <S.InfoText>Pagamento na entrega</S.InfoText>
              <S.InfoText>
                <span>{paymentMethods[state.paymentMethod].label}</span>
              </S.InfoText>
            </div>
          </S.InfoWrapper>
        </S.OrderDetailsContainer>
        <img src={OrderCompletedImage} alt="" />
      </section>
    </S.Wrapper>
  );
}
