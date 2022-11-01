import { useEffect } from "react";
import { useParams } from "react-router";

import IssueService from "../apis/IssueService";
import { Error, IssueDetail, Loading, Title } from "../components";
import { IssueProps } from "../types";
import { useAsync } from "../utils/useAsync";

export const Issue = () => {
  const params = useParams();
  const { number } = params;
  const [state, getIssue] = useAsync(IssueService.getIssue, number, []);

  const { loading, data, error } = state;

  useEffect(() => {
    getIssue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Title>이슈 상세정보</Title>
      {loading && <Loading />}
      {error && <Error />}
      {data && <IssueDetail data={data.data as IssueProps} />}
    </>
  );
};
