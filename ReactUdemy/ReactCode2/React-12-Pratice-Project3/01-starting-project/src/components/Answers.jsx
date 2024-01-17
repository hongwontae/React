import { useRef } from "react";

export default function Answers({
  answers, 
  // 4개의 질문
  // 4개의 질문
  selectedAnswer, 
  // undefined
  // "react good"
  answerState, 
  // 상태값 ""
  // 상태값 "answered"
  // 상태값 "correct"
  onSelect, 
  // handleSelectAnswer
  // handleSelectAnswer
}) {
  const shuffledAnswers = useRef();
  // useRef의 값은 컴포넌트 재평가해도 메모리 값이 변경되지 않는다.

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // 셔플기능
  } // 참조 값이 없다면 4개의 질문을 복사하고 랜덤으로 돌린다.
    // useRef에는 값이 존재하고 메모리 값 변경 x if check x

   // 버튼 클릭시 onSelect 호출 => 클릭한 answer 답안 가지고 상위 컴포넌트로 간다.
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; 
        // undefined === 질문 하나씩 map => false
        // "react good" === answer 하나씩 = 일치하는 버튼 answer 존재 
        let cssClass = "";

        if ((answerState === "answered") && isSelected) { 
          // false
          // true
          cssClass = "selected";
          // cssClass="selected"
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        } 
        // false
        // false
        // true => cssClass => correct

        // 처음 렌더링 떄는 className = ""
        // 해당되는 버튼의 className는 selected가 된다.
        // 2초뒤에 answerState가 correct면 className은 correct answerState가 wrong이면 className은 wrong이 된다.
        return (
          <li key={answer} className="answer">
            <button className={cssClass} onClick={() => onSelect(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
