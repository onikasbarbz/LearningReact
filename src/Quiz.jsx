import React, { useState, useEffect } from "react";
import "./Quiz.css";
const Quiz = () => {
  const questions = [
    {
      questionText: "(1) What is the main ingredient in guacamole?",
      answerOptions: [
        { answerText: "Tomato", isCorrect: false },
        { answerText: "Onion", isCorrect: false },
        { answerText: "Avocado", isCorrect: true },
        { answerText: "Cilantro", isCorrect: false },
      ],
    },
    {
      questionText: "(2) Which country is famous for its sushi ?",
      answerOptions: [
        { answerText: "Thailand", isCorrect: false },
        { answerText: "Japan", isCorrect: true },
        { answerText: "China", isCorrect: false },
        { answerText: "Korea", isCorrect: false },
      ],
    },
    {
      questionText:
        "(3) Which fruit is primary ingredient in traditional British summer pudding?",
      answerOptions: [
        { answerText: "Strawberries", isCorrect: false },
        { answerText: "Raspberries", isCorrect: false },
        { answerText: "Blackberries", isCorrect: false },
        { answerText: "All of the above", isCorrect: true },
      ],
    },
    {
      questionText:
        "(4) Which spice is often referred to as the 'queen of spices'?",
      answerOptions: [
        { answerText: "Cumin", isCorrect: false },
        { answerText: "Cinnamon", isCorrect: false },
        { answerText: "Cardamom", isCorrect: true },
        { answerText: "Turmeric", isCorrect: false },
      ],
    },
    {
      questionText: "(5) What type of fruit is granny smith?",
      answerOptions: [
        { answerText: "Pear", isCorrect: false },
        { answerText: "Apple", isCorrect: true },
        { answerText: "Plum", isCorrect: false },
        { answerText: "Peach", isCorrect: false },
      ],
    },
    {
      questionText:
        "(6) Which fruit is traditionally used in black forest cake?",
      answerOptions: [
        { answerText: "Apple", isCorrect: false },
        { answerText: "Cherry", isCorrect: true },
        { answerText: "Banana", isCorrect: false },
        { answerText: "Blueberry", isCorrect: false },
      ],
    },
    {
      questionText: "(7) Which country is the largest producer of coffee?",
      answerOptions: [
        { answerText: "Colombia", isCorrect: false },
        { answerText: "Brazil", isCorrect: true },
        { answerText: "Ethiopia", isCorrect: false },
        { answerText: "Vietnam", isCorrect: false },
      ],
    },
    {
      questionText: "(8) Which fruit is also known as chinese gooseberry?",
      answerOptions: [
        { answerText: "Lychee", isCorrect: false },
        { answerText: "Kiwi", isCorrect: true },
        { answerText: "Dragon Fruit", isCorrect: false },
        { answerText: "Rambutan", isCorrect: false },
      ],
    },
    {
      questionText:
        "(9) Which Nepali food is spicy fermented leafy green vegitable dish?",
      answerOptions: [
        { answerText: "Gundruk", isCorrect: true },
        { answerText: "Saag", isCorrect: false },
        { answerText: "Tama", isCorrect: false },
        { answerText: "Aloo", isCorrect: false },
      ],
    },
    {
      questionText:
        "(10) What is the main ingredient in the Indian dish paneer tikka?",
      answerOptions: [
        { answerText: "Chicken", isCorrect: false },
        { answerText: "Fish", isCorrect: false },
        { answerText: "Cheese", isCorrect: true },
        { answerText: "Tofu", isCorrect: false },
      ],
    },
  ];
  //state to store the user's answer
  const [selectedAns, setSelectedAns] = useState(
    Array(questions.length).fill(null)
  );
  // state to keep track of the user score
  const [score, setScore] = useState(0);
  // state to track if the quiz has been submitted
  const [submit, setSubmit] = useState(false);
  // state to track if all qns have been answered
  const [allAnswered, setAllAnswered] = useState(false);

  useEffect(() => {
    console.log(`Current score: ${score}`);
  }, [score]);

  // function to handle answer selected
  const handleAnswerClick = (qIndex, isCorrect, answer) => {
    // update score if correct
    if (isCorrect) {
      setScore(score + 1);
    }
    // storing the selected answer index
    const NewSelectedAns = [...selectedAns];
    NewSelectedAns[qIndex] = answer;
    setSelectedAns(NewSelectedAns);
    //checking if the qns are answered
    setAllAnswered(NewSelectedAns.every((ans) => ans !== null));
  };
  function submitBtn() {
    if (allAnswered) {
      setSubmit(true);
    } else {
      alert("Please answer all gthe question before submitting.");
    }
  }
  return (
    <div className="quiz-container">
      <h1>Quiz on Foods around the world</h1>
      {questions.map((questions, qIndex) => (
        <div key={qIndex} className="question-section">
          <ul>
            <h2>{questions.questionText}</h2>
            <div className="answer-section">
              {questions.answerOptions.map((answer, aIndex) => (
                <li
                  key={aIndex}
                  onClick={
                    selectedAns[qIndex] === null
                      ? () =>
                          handleAnswerClick(
                            qIndex,
                            answer.isCorrect,
                            answer.answerText
                          )
                      : null
                  }
                  // style={{
                  //   backgroundColor:
                  //     selectedAns[qIndex] === answer.answerText
                  //       ? answer.isCorrect
                  //         ? "green"
                  //         : "red"
                  //       : "transparent",
                  // }}
                  style={{
                    backgroundColor:
                      selectedAns[qIndex] === answer.answerText
                        ? answer.isCorrect
                          ? "green"
                          : "red"
                        : selectedAns[qIndex] !== null && answer.isCorrect
                        ? "green"
                        : "transparent",
                  }}
                >
                  {answer.answerText}
                </li>
              ))}
            </div>
          </ul>
        </div>
      ))}
      <button onClick={submitBtn}>Submit</button>
      <div className="score-section">
        {submit ? (
          <div className="score-text">
            {" "}
            Your score is {score}/{questions.length}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};
export default Quiz;
