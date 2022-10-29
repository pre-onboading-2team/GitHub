/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import styled from "styled-components";

import { getIssueList } from "../../apis";
import { IssueCard } from "../../components";
import { Issue } from "../../types";

export const UList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IssueList = () => {
  const [issueList, setIssueList] = useState<Issue[]>([]);

  useEffect(() => {
    getIssueList().then((data) => setIssueList(data));
  }, []);

  return (
    <UList>
      {issueList.map((issue) => {
        const { id, number, title, comments, created_at, user } = issue;
        return (
          <IssueCard
            key={id}
            issueNumber={number}
            title={title}
            createdAt={created_at}
            comments={comments}
            writerName={user.login}
          />
        );
      })}
    </UList>
  );
};

export default IssueList;
