import styled from "styled-components";

import { IssueCard } from "../../components";

export const UList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const IssueList = () => {
  return (
    <UList>
      <IssueCard />
      <IssueCard />
      <IssueCard />
      <IssueCard />
      <IssueCard />
      <IssueCard />
    </UList>
  );
};

export default IssueList;
