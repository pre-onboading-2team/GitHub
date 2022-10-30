import React, { useEffect } from "react";

import IssueService from "../../apis/IssueService";
import { UserProps } from "../../types";
import { useAsync } from "../../utils/useAsync";
import * as S from "./style";

type IssueItemProps = {
  number: number;
  title: string;
  user: UserProps;
  createdAt: string;
  comments: number;
  onClick?: () => void;
};

export const IssueItem = ({
  number,
  title,
  user,
  createdAt,
  comments,
  onClick,
}: IssueItemProps) => {
  return (
    <S.IssueItemContainer onClick={onClick}>
      <S.IssueItemBody>
        <S.IssueItemTitle>{`#${number} ${title}`}</S.IssueItemTitle>
        <S.IssueItemInfo>{`작성자: ${user.login}`}</S.IssueItemInfo>
        <S.IssueItemInfo>{`작성일: ${createdAt}`}</S.IssueItemInfo>
      </S.IssueItemBody>
      <S.IssueItemComments>{`코멘트: ${comments}`}</S.IssueItemComments>
    </S.IssueItemContainer>
  );
};
