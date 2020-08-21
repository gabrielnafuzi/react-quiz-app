import React from 'react';

import './styles.css';

function Quiz({
  data: { question, correct_answer, answers },
  handleAnswer,
  currentIndex,
  showAnswers,
  handleNextQuestion,
}) {
  return (
    <>
      <div className="question-box">
        <span className="question-box__counter">{currentIndex + 1}/10</span>
        <h2
          className="question-box__question"
          dangerouslySetInnerHTML={{ __html: question }}
        />
      </div>

      <div className="answers">
        {answers.map(answer => {
          const borderColor = showAnswers
            ? answer === correct_answer
              ? 'correct'
              : 'incorrect'
            : '';

          return (
            <button
              key={answer}
              className={`${borderColor} answers__item`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>

      <div className="next-question">
        {showAnswers && (
          <button
            onClick={handleNextQuestion}
            className="next-question__btn"
          >
            Next question
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
