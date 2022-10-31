import styled from "styled-components";

export const IssueListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem 0;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  border: 1px solid gray;

  padding: 0.8rem;

  cursor: pointer;

  & + & {
  }
`;

export const BannerItemContainer = styled(ItemContainer)`
  height: 100px;
  justify-content: center;
`;

export const BannerItemLink = styled.a`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const IssueItemBody = styled.div`
  display: flex;
  margin-right: auto;
  flex-direction: column;
  overflow: hidden;
`;

export const IssueItemTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const IssueItemInfo = styled.div`
  display: flex;
`;

export const IssueItemProfileImg = styled.img`
  flex: none;
  height: 32px;
  width: 32px;
  margin-right: 0.5rem;
`;

export const IssueItemDescBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueItemDesc = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 0.75rem;
`;

export const IssueItemComments = styled.div`
  flex: none;
  font-size: 0.375rem;
  text-align: center;
`;

export const IssueDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IssueDetailTitle = styled.div`
  display: flex;
  align-items: center;
`;
