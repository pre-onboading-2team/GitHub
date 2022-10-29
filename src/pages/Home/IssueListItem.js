import * as S from "./styles";

const IssueListItem = ({ title, user, date, number, comments }) => {
  return (
    <S.ListItem>
      <div className="titleAndMeta">
        <div>{title}</div>
        <div className="meta">
          <div>{number}</div>
          <div>opened on {date}</div>
          <div>by {user}</div>
        </div>
      </div>
      <div className="comments">{comments}</div>
    </S.ListItem>
  );
};

export default IssueListItem;
