export type interviewDataType = {
    id: number;
    question: string;
    difficulty: string;
    language: string;
    markdown: string;
}

export type MarkdownContentProps = {
    content:string,
    language:string,
}