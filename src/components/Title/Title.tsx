import * as S from "./style";

type TitleProps = {
  children: string;
};

export const Title = ({ children }: TitleProps) => {
  return <S.TitleBlock>{children}</S.TitleBlock>;
};
