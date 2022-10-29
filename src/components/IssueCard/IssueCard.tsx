import * as S from "./IssueCard.style";

const IssueCard = () => {
  return (
    <S.Card>
      <S.LeftSide>
        <S.MainInfos>
          <span>#111</span>
          <h3>Issue title</h3>
        </S.MainInfos>
        <S.SubInfos>
          <span>작성자: 모상빈</span>
          <span>작성일: 2019년 12월 31일</span>
        </S.SubInfos>
      </S.LeftSide>
      <S.Comment>
        <span>코멘트: 67</span>
      </S.Comment>
    </S.Card>
  );
};

export default IssueCard;
