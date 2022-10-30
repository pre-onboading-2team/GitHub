import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import * as S from "./styles";

const Layout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  );
};

export default Layout;
