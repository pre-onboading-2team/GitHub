/* eslint-disable camelcase */
import { IssueState } from "../../pages/Issues";
import { IssueItem } from "./IssueItem";

type IssueListProps = {
  issues: IssueState[];
};

export const IssueList = ({ issues }: IssueListProps) => {
  // TODO: loading 상태와 error 상태 구분해서 렌더링
  if (!issues) return <div>Loading</div>;

  return (
    <div className="IssueListPage">
      <div className="IssueList">
        {/* 렌더링 테스트 */}
        {/* <IssueItem />
        <IssueItem />
        <IssueItem /> */}
        {issues.map(({ id, number, title, user, created_at, comments }) => (
          <IssueItem
            key={id}
            number={number}
            title={title}
            user={user}
            createdAt={created_at}
            comments={comments}
          />
        ))}
      </div>
    </div>
  );
};
