import styled from "styled-components";

export const IssueItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  border: 1px solid gray;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;

  padding: 1rem;

  cursor: pointer;
`;

export const IssueItemBody = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const IssueItemTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.9rem;
`;

export const IssueItemInfo = styled.div`
  font-size: 0.75rem;
`;

export const IssueItemComments = styled.div`
  width: 80px;
  /* background: magenta; */
  font-size: 0.5rem;
  margin-left: 1rem;
  text-align: center;
`;

export const IssueDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueDetailTitle = styled.div`
  display: flex;
`;
