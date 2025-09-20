import { useState } from "react";
import MarkdownContent from "./MarkdownContent";
import type { interviewDataType } from "../types";

type QuestionCardProps = {
  questionData: interviewDataType;
};



const QuestionCard = ({ questionData }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, difficulty, markdown, question } = questionData;

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden mb-6 border-l-4 ${
        difficulty === "مبتدئ"
          ? "border-green-500"
          : difficulty === "متوسط"
          ? "border-blue-500"
          : "border-red-500"
      }`}
    >

      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                difficulty === "مبتدئ"
                  ? "bg-green-100 text-green-800"
                  : difficulty === "متوسط"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {difficulty}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
              {language.toUpperCase()}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        </div>
        <span className="text-xl text-gray-500">{isOpen ? "−" : "+"}</span>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <MarkdownContent content={markdown} language={language} />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
