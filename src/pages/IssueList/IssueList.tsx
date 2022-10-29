/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getIssueList } from "../../apis";
import { Advertisement, IssueCard } from "../../components";
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
            />
          </React.Fragment>
        );
      })}
    </UList>
  );
};

export default IssueList;
