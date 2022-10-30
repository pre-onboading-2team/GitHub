import React, { useEffect } from "react";

import IssueService from "../apis/IssueService";
import { Error, IssueList, Loading, Title } from "../components";
import { IssuesContextProvider, IssuesState } from "../contexts/IssueContext";
import { useAsync } from "../utils/useAsync";

export const Issues = () => {
  const [state, getIssues] = useAsync(IssueService.get, []);
  const { loading, data, error } = state;

  const init = async () => {
    await getIssues();
  };

  useEffect(() => {
    init();
  }, []);

  const fetchedIssues = data?.data as IssuesState;

  return (
    <IssuesContextProvider>
      <Title>이슈 목록</Title>
      {error && <Error />}
      {loading && <Loading />}
      {data && <IssueList fetchedIssues={fetchedIssues} />}
    </IssuesContextProvider>
  );
};
