import { Link } from "react-router-dom";

import * as S from "./styles";

const IssueListItem = ({ title, user, date, number, comments }) => {
  return (
    <S.ListItem>
      <div className="titleAndMeta">
        <div>
          <Link to={`/${number}`}>{title}</Link>
        </div>
        <div className="meta">
          <div>#{number}</div>
          <div>opened on {date}</div>
          <div>by {user}</div>
        </div>
      </div>
      <S.Balloon className="comments">{comments}</S.Balloon>
    </S.ListItem>
  );
};

export default IssueListItem;
