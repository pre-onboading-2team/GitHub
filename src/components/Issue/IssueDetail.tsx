import { MarkdownRenderer } from "../Markdown/MarkdownRenderer";
import { IssueItem } from "./IssueItem";
import * as S from "./style";

// 더미 데이터
const markdown = `
# 헤딩

**굵게**

일반 텍스트

\`\`\`
    import what
\`\`\`

*기울이기*

> 인용문

`;

export const IssueDetail = () => {
  return (
    <S.IssueDetailContainer>
      <S.IssueDetailTitle>
        <div className="Profile">프로필 이미지</div>
        <IssueItem />
      </S.IssueDetailTitle>
      <MarkdownRenderer>{markdown}</MarkdownRenderer>
    </S.IssueDetailContainer>
  );
};
