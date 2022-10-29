import ReactMarkdown from "react-markdown";

const CommentListItem = ({ avatar, user, date, body }) => {
  return (
    <li>
      <img src={`${avatar}`} />
      <div>{user}</div>
      <div>{date}</div>
      <div>
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </li>
  );
};

export default CommentListItem;
