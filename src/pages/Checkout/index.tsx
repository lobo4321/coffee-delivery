import { FormContainer } from "./components/FormContainer";
import { InfoContainer } from "./components/InfoContainer";
import * as zod from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum IPaymnetMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(IPaymnetMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type IOrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type IConfirmOrderFormData = IOrderData;

export function Checkout() {
  const confirmOrderForm = useForm<IConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });
  const { cleanCart } = useCart();

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: IConfirmOrderFormData) {
    navigate("/order-complete", {
      state: data,
    });

    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <S.Wrapper onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormContainer />
        <InfoContainer />
      </S.Wrapper>
    </FormProvider>
  );
}
