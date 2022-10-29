import * as S from "./styles";

const IssueListItem = ({ title, name, date, number, comments }) => {
  return (
    <S.ListItem>
      <div className="titleAndMeta">
        <div>{title}</div>
        <div className="meta">
          <div>{number}</div>
          <div>{date}</div>
          <div>{name}</div>
        </div>
      </div>
      <div className="comments">{comments}</div>
    </S.ListItem>
  );
};

export default IssueListItem;
