import { useState, useCallback } from 'react';

import QUESTIONS from '../question.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  // 유저의 대답을 배열 형태로 저장하는 state

  const activeQuestionIndex = userAnswers.length;
  // 유저가 대답한 개수

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  // 유저가 모든 대답을 했을 떄의 boolean

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  // 질문지의 문항을 선택하면 그 문항을 매개변수로 가져와서 prevState 처리해주는 handler + 한 번 생성하면 재실행 x하는 useCallback

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  // 질문을 하지 않았을 떄의 대답 state에 null 처리해주는 함수

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />
  } // 모든 대답이 시마이되면 return 되는 JSX

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // KEY의 value가 변할 떄마다 해당 인스턴스가 재성성된다.
        index={activeQuestionIndex} // 유저가 대답한 개수
        onSelectAnswer={handleSelectAnswer} // 질문 선택 핸들러
        onSkipAnswer={handleSkipAnswer} // 스킵 함수
      />
    </div>
  );
}