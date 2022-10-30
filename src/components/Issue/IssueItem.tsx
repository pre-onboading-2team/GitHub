import React, { useEffect } from "react";

import { UserProps } from "../../types";
import { getFormattedDate } from "../../utils";
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
    <S.ItemContainer onClick={onClick}>
      <S.IssueItemBody>
        <S.IssueItemTitle>{`#${number} ${title}`}</S.IssueItemTitle>
        <S.IssueItemInfo>
          <S.IssueItemProfileImg src={`${user.avatar_url}`} />
          <S.IssueItemDescBlock>
            <S.IssueItemDesc>{`작성자: ${user.login}`}</S.IssueItemDesc>
            <S.IssueItemDesc>{`작성일: ${getFormattedDate(
              createdAt
            )}`}</S.IssueItemDesc>
          </S.IssueItemDescBlock>
        </S.IssueItemInfo>
      </S.IssueItemBody>
      <S.IssueItemComments>{`코멘트: ${comments}`}</S.IssueItemComments>
    </S.ItemContainer>
  );
};
