import React from "react";

import { IssueList, Title } from "../components";
import { IssuesContextProvider } from "../contexts/IssueContext";

export const Issues = () => {
  return (
    <IssuesContextProvider>
      <Title>이슈 목록</Title>
      <IssueList />
    </IssuesContextProvider>
  );
};
