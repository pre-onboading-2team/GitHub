/* eslint-disable camelcase */
import { useEffect } from "react";
import { useNavigate } from "react-router";

import {
  IssuesState,
  useIssuesDispatch,
  useIssuesState,
} from "../../contexts/IssueContext";
import { BannerItem } from "./BannerItem";
import { IssueItem } from "./IssueItem";
import * as S from "./style";

type IssueListProps = {
  fetchedIssues: IssuesState;
};

export const IssueList = ({ fetchedIssues }: IssueListProps) => {
  const issues = useIssuesState();
  const dispatch = useIssuesDispatch();
  const navigate = useNavigate();

  const setIssues = async () => {
    await dispatch({ type: "SET", state: fetchedIssues });
  };

  useEffect(() => {
    setIssues();
  }, []);

  return (
    <S.IssueListContainer>
      {issues.map(({ id, number, title, user, created_at, comments }, idx) => {
        return idx === 4 ? (
          <BannerItem
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
            href="https://www.wanted.co.kr/"
          />
        ) : (
          <IssueItem
            key={id}
            number={number}
            title={title}
            user={user}
            createdAt={created_at}
            comments={comments}
            onClick={() => {
              navigate(`/${number}`);
            }}
          />
        );
      })}
    </S.IssueListContainer>
  );
};
