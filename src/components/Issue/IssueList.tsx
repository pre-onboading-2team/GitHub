import { IssueItem } from "./IssueItem";

export const IssueList = () => {
  return (
    <div className="IssueListPage">
      <div className="IssueListTitle">이슈 목록</div>
      <div className="IssueList">
        {/* 렌더링 테스트 */}
        <IssueItem />
        <IssueItem />
        <IssueItem />
      </div>
    </div>
  );
};
