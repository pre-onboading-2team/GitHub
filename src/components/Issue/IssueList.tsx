/* eslint-disable camelcase */
import { useCallback, useState } from "react";
import { useNavigate } from "react-router";

import IssueService from "../../apis/IssueService";
import { useIssuesState } from "../../contexts/IssueContext";
import { useAsyncIssues } from "../../utils";
import { useIntersection } from "../../utils/useIntersection";
import { BannerItem, Error, IssueItem, Loading } from "..";
import * as S from "./style";

export const IssueList = () => {
  const issues = useIssuesState();
  const [page, setPage] = useState(1);
  const [state, _] = useAsyncIssues(IssueService.getIssues, page, [page]);

  const navigate = useNavigate();

  const getNextIssues = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  const [setTarget] = useIntersection(getNextIssues, { threshold: 0 });

  const { loading, error } = state;

  return (
    <S.IssueListContainer>
      {issues.map(({ id, number, title, user, created_at, comments }, idx) => {
        return idx === 4 ? (
          <BannerItem
            key={id}
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
      {loading ? <Loading /> : <div ref={setTarget} />}
      {error && <Error />}
    </S.IssueListContainer>
  );
};
