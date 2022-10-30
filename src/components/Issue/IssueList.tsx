/* eslint-disable camelcase */
import { useEffect } from "react";

import {
  IssuesState,
  useIssuesDispatch,
  useIssuesState,
} from "../../contexts/IssueContext";
import { IssueItem } from "./IssueItem";
import * as S from "./style";

type IssueListProps = {
  fetchedIssues: IssuesState;
};

export const IssueList = ({ fetchedIssues }: IssueListProps) => {
  const issues = useIssuesState();
  const dispatch = useIssuesDispatch();

  const setIssues = async () => {
    await dispatch({ type: "SET", state: fetchedIssues });
  };

  useEffect(() => {
    setIssues();
  }, []);

  return (
    <S.IssueListContainer>
      {issues.map(({ id, number, title, user, created_at, comments }) => (
        <IssueItem
          key={id}
          number={number}
          title={title}
          user={user}
          createdAt={created_at}
          comments={comments}
        />
      ))}
    </S.IssueListContainer>
  );
};
