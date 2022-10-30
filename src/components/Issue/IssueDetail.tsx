/* eslint-disable camelcase */
import { useEffect } from "react";

import { IssueProps } from "../../types";
import { MarkdownRenderer } from "../Markdown/MarkdownRenderer";
import { IssueItem } from "./IssueItem";
import * as S from "./style";

export const IssueDetail = ({ data }: { data: IssueProps }) => {
  const { number, title, user, created_at, comments, body } = data;

  return (
    <S.IssueDetailContainer>
      <S.IssueDetailTitle>
        <IssueItem
          number={number}
          title={title}
          user={user}
          createdAt={created_at}
          comments={comments}
        />
      </S.IssueDetailTitle>
      <MarkdownRenderer>{body}</MarkdownRenderer>
    </S.IssueDetailContainer>
  );
};
