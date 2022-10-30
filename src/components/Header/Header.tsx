import React, { ReactNode } from "react";

import * as S from "./style";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.HeaderBlock>
      <S.HeaderTitle>{children}</S.HeaderTitle>
    </S.HeaderBlock>
  );
};
