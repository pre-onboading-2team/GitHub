import React from "react";

import * as S from "./style";

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <S.HeaderBlock>
      <S.HeaderTitle>{title}</S.HeaderTitle>
      <S.HeaderTitle>{subtitle}</S.HeaderTitle>
    </S.HeaderBlock>
  );
};
