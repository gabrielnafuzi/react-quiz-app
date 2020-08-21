import React, { useState } from 'react';

import Form from '../Form';
import Quiz from '../Quiz';
import getApiUrl from '../../utils/apiUrl';

import './styles.css';

function Main() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function fetchData(e, category, difficulty) {
    e.preventDefault();

    const API_URL = getApiUrl(category, difficulty);

    try {
      setIsSubmitted(true);

      const response = await fetch(API_URL);

      const data = await response.json();

      const questionsShuffled = data.results.map(question => ({
        ...question,
        answers: [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => Math.random() - 0.5),
      }));

      setQuestions(questionsShuffled);
    } catch (err) {
      console.error(err);
    }
  }

  function handleAnswer(answer) {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  }

  function handleNextQuestion() {
    setCurrentIndex(currentIndex + 1);

    setShowAnswers(false);
  }

  return !isSubmitted ? (
    <Form fetchData={fetchData} />
  ) : questions.length > 0 ? (
    currentIndex >= questions.length ? (
      <div className="score">
        <h1>
          Game ended! <br /> Your score was: {score}
        </h1>
        <button
          onClick={() => window.location.reload(false)}
          className="score__play-again"
        >
          Play again
        </button>
      </div>
    ) : (
      <div className="container">
        <Quiz
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          currentIndex={currentIndex}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      </div>
    )
  ) : (
    <div className="loading">
      <span className="loader"></span>
    </div>
  );
}

export default Main;
