import Markdown from "react-markdown";
import type { MarkdownContentProps } from "../types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const MarkdownContent = ({ content, language }: MarkdownContentProps) => {
  return (
    <Markdown
      components={{
        code({  className, children, ...props }) {
          return  language ? (
            <div dir="ltr">
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={atomOneDark}
                language={language}
                PreTag="div"
                {...props}
              ></SyntaxHighlighter>
            </div>
          ) : (
            <div dir="ltr">
              <code className={className}>{children}</code>
            </div>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownContent;
