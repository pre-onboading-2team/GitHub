import React from "react";

import * as S from "./styles";

const AdArea = () => {
  return (
    <S.ListItem className="ad">
      <img src={require("../../assets/wanted.jpg")} />
    </S.ListItem>
  );
};

export default AdArea;
