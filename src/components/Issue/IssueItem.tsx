import { UserProps } from "../../types";
import * as S from "./style";

type IssueItemProps = {
  number: number;
  title: string;
  user: UserProps;
  createdAt: string;
  comments: number;
};

export const IssueItem = ({
  number,
  title,
  user,
  createdAt,
  comments,
}: IssueItemProps) => {
  return (
    <S.IssueItemContainer>
      <S.IssueItemBody>
        <S.IssueItemTitle>{`#${number} ${title}`}</S.IssueItemTitle>
        <S.IssueItemInfo>{`작성자: ${user.login}`}</S.IssueItemInfo>
        <S.IssueItemInfo>{`작성일: ${createdAt}`}</S.IssueItemInfo>
      </S.IssueItemBody>
      <S.IssueItemComments>{`코멘트: ${comments}`}</S.IssueItemComments>
    </S.IssueItemContainer>
  );
};
