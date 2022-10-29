import { useNavigate } from "react-router-dom";

import { dateFormat } from "../../utils";
import * as S from "./IssueCard.style";

interface Props {
  issueNumber: number;
  title: string;
  createdAt: string;
  comments: number;
  writerName: string;
  isDetailPage: boolean;
}

const IssueCard = ({
  issueNumber,
  title,
  createdAt,
  comments,
  writerName,
  isDetailPage,
}: Props) => {
  const navigate = useNavigate();
  return (
    <S.Card
      onClick={() => navigate(`/${issueNumber}`)}
      isDetailPage={isDetailPage}
    >
      <S.LeftSide>
        <S.MainInfos>
          <h3>{`# ${issueNumber} ${title}`}</h3>
        </S.MainInfos>
        <S.SubInfos>
          <span>작성자: {writerName}</span>
          <span>작성일: {dateFormat(createdAt)}</span>
        </S.SubInfos>
      </S.LeftSide>
      <S.Comment>
        <span>코멘트: {comments}</span>
      </S.Comment>
    </S.Card>
  );
};

export default IssueCard;
