import * as S from "./styles";
import { IButton } from "./typings";

export function Button({ children, ...props }: IButton) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}
