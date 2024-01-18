import { useState, useCallback } from "react";

import QUESTIONS from "../question.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizComplete = QUESTIONS.length === userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    seletedAnswer
  ) {
    setUserAnswers((prevState) => {
      return [...prevState, seletedAnswer];
    });
  },
  []);

  const handlSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizComplete) {
    return (
      <Summary userAnswers={userAnswers}></Summary>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handlSkipAnswer}
      ></Question>
    </div>
  );
};

export default Quiz;
