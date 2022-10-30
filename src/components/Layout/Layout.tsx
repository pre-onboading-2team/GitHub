import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import * as S from "./style";

export const Layout = () => {
  return (
    <S.LayoutContainer>
      <Header>Organization Name / Repo Name</Header>
      <S.LayoutMainBlock>
        <Outlet />
      </S.LayoutMainBlock>
    </S.LayoutContainer>
  );
};
