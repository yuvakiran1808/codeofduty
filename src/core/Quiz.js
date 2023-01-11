import React, { useState } from "react";
import "../index.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const fade = {
  hidden : {
      opacity:0,
  },
  show : {
      opacity : 1,
      transition: {ease : "easeOut",duration : 0.75},
  },
};
const questions = [
  {
    question: "What is the name of Harry Potter's owl",
    answers: [
      { option: "Hedwig", isCorrect: true },
      { option: "Screech", isCorrect: false },
      { option: "Merlin", isCorrect: false },
      { option: "Wisdom", isCorrect: false },
    ],
  },
  {
    question: "Who is Draco Malfoy's dad?",
    answers: [
      { option: "Stephen Malfoy", isCorrect: false },
      { option: "Lucius Malfoy", isCorrect: true },
      { option: "Martin Malfoy", isCorrect: false },
      { option: "Luis Malfoy", isCorrect: false },
    ],
  },
  {
    question: "Name Ron Weasley's pet rat.",
    answers: [
      { option: "Buttercup", isCorrect: false },
      { option: "Squidge", isCorrect: false },
      { option: "Brownie", isCorrect: false },
      { option: "Scabbers", isCorrect: true },
    ],
  },
  {
    question: "Name Ron Weasley's parents.",
    answers: [
      { option: "Arthur and Molly", isCorrect: true },
      { option: "Stephen and Molly", isCorrect: false },
      { option: "Robert and Arthur", isCorrect: false },
      { option: "Martin and Robert", isCorrect: false },
    ],
  },
  {
    question: "When was the first Harry Potter film released?",
    answers: [
      { option: "2000", isCorrect: false },
      { option: "2002", isCorrect: false },
      { option: "2001", isCorrect: true },
      { option: "2004", isCorrect: false },
    ],
  },
];

const Quiz = ({character}) => {
  const [show, setShow] = useState(false);
  const [presentquestion,setPresentQuestion] = useState(0);
  const [score,setScore] = useState(0);

  const onClickHandler = (isCorrect)=>{
    if(isCorrect===true)
    {
        setScore(score+1);
        toast("Correct answer",{
            type: "success",
            autoClose: 100,
        });
    }
    else{
        toast("Wrong answer",{
            type: "error",
            autoClose: 100,
        });
    }
      const nextquestion = presentquestion+1;
      if(nextquestion<questions.length)
      {
        setPresentQuestion(nextquestion);
      }
      else{
        setShow(true);
        if(score<=2)
        {
          toast("You Lose",{
            type: "warning",
            autoClose: 5000,
            theme : "dark",
            position : "top-center"
        });
        }
        else{
          toast("You Won",{
            type: "success",
            autoClose: 5000,
            theme : "dark",
            position : "top-center"
        });
        }
      }
  }
  return (
    <motion.div>
      {show ? (
        <div className="quizCon px-3">
          <div className="container mt-5 bg-dark p-5 text-center">
            <h1 className="text-center text-primary ">Your result : </h1>
              <h1 className="text-white text-center mt-5">Hey! {character} you scored {score} out of 5</h1>
              <Link to = "/" className = "btn btn-warning mt-3">Back To Home</Link>
          </div>
        </div>
      ) : (
        <motion.div className="quizCon px-3" variants={fade} initial = "hidden" animate = "show">
          <motion.div className="container mt-5 bg-dark p-5">
            <motion.h3 className="text-white"> <span>{presentquestion+1}/5.</span> {questions[presentquestion].question}</motion.h3>
            <motion.ul className="list-group mt-3">
              {questions[presentquestion].answers.map((element) => {
                return <motion.li variants={fade} initial = "hidden" animate = "show" onClick={()=>onClickHandler(element.isCorrect)} key={element.option} className="list-group-item mb-2">{element.option}</motion.li>;
              })}
            </motion.ul>
          </motion.div>
        </motion.div>
      )}
      <ToastContainer />
    </motion.div>
  );
};

export default Quiz;
