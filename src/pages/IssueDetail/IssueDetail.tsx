/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

import { getIssueDetail } from "../../apis";
import { IssueCard, LoadingSpinner } from "../../components";
import { useIssueDispatch, useIssueSelector } from "../../contexts";
import { NotFound } from "../NotFound";
import * as S from "./issueDetail.style";

const IssueDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useIssueDispatch();
  const { issueDetail, isError, isLoading } = useIssueSelector();

  useEffect(() => {
    getIssueDetail(dispatch, Number(params.id));

    if (isError) navigate("/not-found");
  }, [dispatch, params, isError, navigate]);

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <LoadingSpinner />
      </S.LoadingContainer>
    );
  }

  if (issueDetail) {
    return (
      <S.Container>
        <S.IssueInfos>
          <S.ImgContainer>
            <img src={issueDetail.user.avatar_url} alt="profile" />
          </S.ImgContainer>
          <IssueCard
            issueNumber={issueDetail.number}
            title={issueDetail.title}
            createdAt={issueDetail.created_at}
            comments={issueDetail.comments}
            writerName={issueDetail.user.login}
            isDetailPage
          />
        </S.IssueInfos>
        <S.Main>
          <ReactMarkdown>{issueDetail.body}</ReactMarkdown>
        </S.Main>
      </S.Container>
    );
  }

  return <NotFound />;
};

export default IssueDetail;
