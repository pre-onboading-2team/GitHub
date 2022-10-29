import { dateFormat } from "../../utils";
import * as S from "./IssueCard.style";

interface Props {
  issueNumber: number;
  title: string;
  createdAt: string;
  comments: number;
  writerName: string;
}

const IssueCard = ({
  issueNumber,
  title,
  createdAt,
  comments,
  writerName,
}: Props) => {
  return (
    <S.Card>
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
