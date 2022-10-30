import styled from "styled-components";

export const IssueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  /* background: magenta; */
  border: 1px solid gray;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  padding: 1rem;

  cursor: pointer;
`;

export const IssueDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueDetailTitle = styled.div`
  display: flex;
`;
