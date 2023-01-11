import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Quiz from "./Quiz";
const Quizhome = () => {
  const [display, setDisplay] = useState(true);
//   const [characterCount, setCharactercount] = useState(0);
  const [character,setCharacter] = useState("");
  const onSubmitHandler = () => {
    if(character.length>0)
    {
        setDisplay(false);
        console.log(character);
    }
    else{
        toast("Please enter your name!",{
            type: "error"
        });
    }
  };
  return (
    <div>
      {display?(
        <div className="container-fluid bg-dark">
          <div className="nameCon">
            <div className="bg-light nameSubCon p-3 text-center shadow rounded">
              <label htmlFor="name" className="text-center">
                Enter your name :
              </label>
              <input
                onChange={(e) => {
                    setCharacter(e.target.value);
                }}
                type="text"
                className="form-control mt-3 mb-3"
                name="name"
              />
              <button
                onClick={onSubmitHandler}
                
                className="btn btn-lg btn-primary "
              >
                Enter Quiz
              </button>
            </div>
          </div>
        </div>
      ) : (
         <Quiz character = {character}/>
      )}
      <ToastContainer />
    </div>
  );
};

export default Quizhome;
