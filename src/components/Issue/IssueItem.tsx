import * as S from "./style";

export const IssueItem = () => {
  return (
    <S.IssueItemContainer>
      <div className="body">
        <div className="titleBlock">
          <span className="title">#111 issue title</span>
        </div>
        <div className="metadata">작성자: name, 작성일: 2019년 12월 31일</div>
      </div>
      <div className="comments">코멘트: 67</div>
    </S.IssueItemContainer>
  );
};
