import { useState, useCallback } from "react";

import QUESTIONS from "../question.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const Quiz = () => {
  const [answerState, setAnswerState] = useState(""); 
  // answered
  // correct
  const [userAnswers, setUserAnswers] = useState([]); 
  // ["react good"]
  // ["react good"]

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
    // activeQI => 0
    // activeQI => 0
    // activeQI => 0

  const quizComplete = QUESTIONS.length === userAnswers.length;
  // quizC => false
  // quizC => false
  // quizC => false

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(seletedAnswer) {
      setAnswerState("answered"); // answerState => "answered로 변경" batch처리
      setUserAnswers((prevState) => {
        return [...prevState, seletedAnswer];
        // 이전값을 버리지 않고 추가 => userAnswers => ["react good"]
      });

      setTimeout(() => {
        if (seletedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          // "react good" === "react good"
          setAnswerState("correct"); 
          // answerState => "correct" 1초 뒤에 발동 => 비동기처리
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState(""); 
          // 2 초 뒤에 answerState => "" => 비동기처리
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex] // 변동되지 않음
  ); // 재생성 x

  const handlSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  ); // 재생성 x

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg}></img>
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} 
        // 0 => 재평가할 떄마다 state 변경으로 change
        // 0 => 값이 변경되지 않음
        questionText={QUESTIONS[activeQuestionIndex].text} 
        // QUESTIONS[0].text 
        // QUESTIONS[0].text
        answers={QUESTIONS[activeQuestionIndex].answers}
        // QUSTIONS[0].answers 4개의 질문지
        // QUESTIONS[0].answers 4개의 질문지
        answerState={answerState} 
        // state값 => ""
        // state값 => "answered"
        // state값 => "correct"
        selectedAnswer={userAnswers[userAnswers.length-1]} 
        // undefined
        // "react good"
        onSelectAnswer={handleSelectAnswer} 
        // useCallback activeQuestionIndex 변경마다 재평가되는 함수
        // useCallback activeQuestionIndex 변경마다 재평가되는 함수 => 변경x
        onSkipAnswer={handlSkipAnswer} 
        // useCallback handleSelectAnswer 변경마다 재평가되는 함수
        // useCallback handleSelectAnswer 변경마다 재평가되는 함수 => 변경 x
      ></Question>
    </div>
  );
};

export default Quiz;
