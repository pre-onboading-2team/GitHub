import React from "react";

import * as S from "./style";

type BannerItemProps = {
  src: string;
  href: string;
  onClick?: () => void;
};

export const BannerItem = ({ src, href, onClick }: BannerItemProps) => {
  return (
    <S.BannerItemContainer onClick={onClick}>
      <S.BannerItemLink href={href} target="_blank" rel="noopener noreferrer">
        <img src={src} alt="wanted" />
      </S.BannerItemLink>
    </S.BannerItemContainer>
  );
};
