import styled from "styled-components";

export const IssueListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueItemContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex: 2;

  justify-content: space-between;
  align-items: center;
  width: 80%;

  border: 1px solid gray;
  border-radius: 0.25rem;

  padding: 0.8rem;

  cursor: pointer;

  & + & {
    margin-bottom: 0.5rem;
  }
`;

export const IssueItemBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const IssueItemTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.9rem;
`;

// TODO : image url 연결
export const IssueItemProfile = styled.div`
  flex: none;
  height: 40px;
  width: 40px;
  background: gray;
  margin-right: 0.5rem;
`;

export const IssueItemInfo = styled.div`
  font-size: 0.75rem;
`;

export const IssueItemComments = styled.div`
  flex: none;
  width: 80px;
  font-size: 0.375rem;
  margin-left: 0.5rem;
  text-align: center;
`;

export const IssueDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueDetailTitle = styled.div`
  display: flex;
  align-items: center;
  /* background: magenta; */
  /* padding: 0 rem; */
`;
