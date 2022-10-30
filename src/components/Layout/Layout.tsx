import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import * as S from "./style";

export const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header title="Organization Name" subtitle="Repo Name" />
      <S.LayoutMainBlock>
        <Outlet />
      </S.LayoutMainBlock>
    </S.LayoutContainer>
  );
};
