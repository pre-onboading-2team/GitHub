import React from "react";

import * as S from "./style";

export const Loading = ({ className }: { className?: string }) => {
  return (
    <S.LoadingContainer>
      <S.LoadingSpinner className={`lds-ring ${className}`}>
        <div />
        <div />
        <div />
        <div />
      </S.LoadingSpinner>
    </S.LoadingContainer>
  );
};
