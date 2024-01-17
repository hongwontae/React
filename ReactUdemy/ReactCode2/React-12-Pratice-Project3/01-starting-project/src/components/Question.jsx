import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) 

  // 해당 컴포넌트들은 activeIndex가 변경될 때마다 인스턴스가 재생성된다.
{
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer}></QuestionTimer>
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      ></Answers>
    </div>
  );
}
