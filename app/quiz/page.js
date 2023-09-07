'use client';

import React, { useState } from 'react';
import './quiz.css';


const Quiz = () => {
  const questions = [
    {
      question: 'What is the most common martial art used in MMA?',
      options: ['Karate', 'Judo', 'Brazilian Jiu-Jitsu', 'Taekwondo'],
      answer: 'Brazilian Jiu-Jitsu',
    },
    {
      question: 'Who is considered the "Father of Modern Boxing"?',
      options: ['Mike Tyson', 'Muhammad Ali', 'Bruce Lee', 'Jack Johnson'],
      answer: 'Jack Johnson',
    },
    {
      question: 'Which martial art focuses on ground fighting and submissions?',
      options: ['Muay Thai', 'Boxing', 'Wrestling', 'Judo'],
      answer: 'Judo',
    },
    {
      question: 'What is the main objective of Brazilian Jiu-Jitsu?',
      options: ['Punching and kicking', 'Choking and joint locks', 'Throws and takedowns', 'Spinning kicks'],
      answer: 'Choking and joint locks',
    },
  ];

  const fighterLevels = [
    'Novice Fighter',
    'Intermediate Fighter',
    'Experienced Fighter',
    'Master Fighter',
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateFighterLevel = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage < 25) return fighterLevels[0];
    if (percentage < 50) return fighterLevels[1];
    if (percentage < 75) return fighterLevels[2];
    return fighterLevels[3];
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="quiz-result">
          <h2>Your Fighter Level: <span className='fighter-level'>{calculateFighterLevel()}</span></h2>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2 className='question-head'>
.            
            Question {currentQuestion + 1}.
            
          </h2>
          <p className='question'>
            <strong>

            {questions[currentQuestion].question}
            
            </strong>
            </p>
          <div className="options">
            <strong>
        
            {questions[currentQuestion].options.map((option, index) => (
              <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
        
            </strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;

