/* eslint-disable camelcase */
import { useIssuesDispatch, useIssuesState } from "../../contexts/IssueContext";
import { useAsync } from "../../utils/useAsync";
import { IssueItem } from "./IssueItem";

export const IssueList = () => {
  // TODO: loading 상태와 error 상태 구분해서 렌더링 표기
  const issues = useIssuesState();
  const dispatch = useIssuesDispatch();
  // const [state,getIssues] = useAsync(IssueService.getIssues(),deps);

  if (!issues) return <div>Loading</div>;

  return (
    <div className="IssueListPage">
      <div className="IssueList">
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
