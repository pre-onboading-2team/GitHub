import ReactMarkdown from "react-markdown";

import * as S from "./styles";

const CommentListItem = ({ avatar, user, date, body }) => {
  return (
    <S.CommentListItem>
      <div className="comment-header">
        <img src={`${avatar}`} />
        <div>{user}</div>
        <div>{date}</div>
      </div>

      <ReactMarkdown className="comment-body">{body}</ReactMarkdown>
    </S.CommentListItem>
  );
};

export default CommentListItem;
