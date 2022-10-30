import ReactMarkdown from "react-markdown";

import * as S from "./style";

type MarkdownRendererProps = {
  children: string;
};

export const MarkdownRenderer = ({ children }: MarkdownRendererProps) => {
  return (
    <S.MarkdownStyle>
      <div className="markdown-body">
        <ReactMarkdown>{children}</ReactMarkdown>
      </div>
    </S.MarkdownStyle>
  );
};
