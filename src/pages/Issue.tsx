import { useCallback, useEffect } from "react";
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

  const init = useCallback(async () => {
    await getIssue();
  }, [getIssue]);

  useEffect(() => {
    init();
  }, [params, getIssue, state, number, init]);

  return (
    <>
      <Title>이슈 상세정보</Title>
      {loading && <Loading />}
      {error && <Error />}
      {data && <IssueDetail data={data.data as IssueProps} />}
    </>
  );
};
