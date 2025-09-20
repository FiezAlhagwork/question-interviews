/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "react-syntax-highlighter" {
  import * as React from "react";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    children?: React.ReactNode;
    PreTag?: string | React.ComponentType<any>;
    showLineNumbers?: boolean;
    wrapLines?: boolean;
    startingLineNumber?: number;
    [key: string]: any;
  }

  const SyntaxHighlighter: React.FC<SyntaxHighlighterProps>;
  export default SyntaxHighlighter;
}

declare module "react-syntax-highlighter/dist/esm/styles/hljs" {
  export const atomOneDark: any;
}
