import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";

const Summary = ({ userAnswers }) => {
  return (
    <div id="summary">
      <img src={quizCompleteImg}></img>
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">10%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">10%</span>
          <span className="text">answered correctly</span>
        </p> 
        <p>
          <span className="number">10%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ele, idx) => {

            let cssClass = 'user-answer'

            if(ele === null){
                cssClass += ' skipped'
            } else if(answer === QUESTIONS[idx].answers[0]){
                cssClass += ' correct'
            } else{
                cssClass += ' wrong'
            }

          return (
            <li>
              <h3>{idx+1}</h3>
              <p className="question">{QUESTIONS[idx].text}</p>
              <p className={cssClass}>{ele ? ele : 'Skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
