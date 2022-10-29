/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getIssues } from "../../apis";
import { Advertisement, IssueCard, LoadingSpinner } from "../../components";
import { useIssueDispatch, useIssueSelector } from "../../contexts";
import { useInfiniteScroll } from "../../hooks";
import * as S from "./IssueList.style";

const IssueList = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useIssueDispatch();
  const { issueList, isError, isLoading } = useIssueSelector();

  const handlePage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const [setTarget] = useInfiniteScroll(handlePage, { threshold: 0 });

  useEffect(() => {
    getIssues(dispatch, page);

    if (isError) navigate("/not-found");
  }, [dispatch, page, isError, navigate]);

  return (
    <S.UList>
      {issueList.map((issue, index) => {
        const { id, number, title, comments, created_at, user } = issue;
        return (
          <React.Fragment key={id}>
            {index === 4 && <Advertisement />}
            <IssueCard
              issueNumber={number}
              title={title}
              createdAt={created_at}
              comments={comments}
              writerName={user.login}
              isDetailPage={false}
            />
          </React.Fragment>
        );
      })}
      {isLoading ? (
        <S.LoadingContainer>
          <LoadingSpinner />
        </S.LoadingContainer>
      ) : (
        <div ref={setTarget} />
      )}
    </S.UList>
  );
};

export default IssueList;
