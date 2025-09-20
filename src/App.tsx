import "./App.css";
import PageHead from "./components/PageHead";
import QuestionCard from "./components/QuestionCard";
import { interviewData } from "./data";

function App() {
  return (
    <>
      <PageHead />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8*">
        <div className="max-w-6xl mx-auto">
          <div className=" ">
            {interviewData.map((item) => (
              <QuestionCard key={item.id} questionData={item} />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
