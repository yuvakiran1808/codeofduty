import React from "react";
import Menu from "./Menu";
import image from "../images/homeimage.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  const directtocontact = () => {
    return navigate("/quiz");
  };
  return (
    <div>
      <Menu />
      <div className="container mt-5 py-3 px-4 d-none d-sm-block">
        <div className="row">
          <div className="col-md-6 py-5">
            <h3 className="heroText py-3">
              Get ready for having fun with QuizApp
            </h3>
            <p>Enjoy the time playing the quiz in QuizApp</p>
            <button
              onClick={() => {
                directtocontact();
              }}
              className="heroBtn mt-3"
            >
              Play Now!
            </button>
          </div>
          <div className="col-md-6">
            <img src={image} alt="homeimg" className="homeimg img-fluid" />
          </div>
        </div>
      </div>
      <div className="container mobileCon p-3 d-block d-sm-none">
        <div className="row">
          <div className="col-md-6 py-2 text-center">
            <h3 className="heroText py-3">
              Get ready for having fun with QuizApp
            </h3>
            <p>Enjoy the time playing the quiz in QuizApp</p>
            <button
              onClick={() => {
                directtocontact();
              }}
              className="heroBtn mt-3"
            >
              Play Now!
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center">How does it work</h3>
        <div className="row py-4">
          <div className="col-md-4 mb-3">
            <div className="card border border-warning bg-dark">
              <img src={image} alt="image1" />
              <div className="card-body bg-primary">
                <p className="text-center text-white">Click on Quiz</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card border border-warning">
              <img src={image} alt="imag2" />
              <div className="card-body bg-primary">
                <p className="text-center text-white">Enter Your Name</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-dark">
              <img src={image} alt="img3" className="card-img-top" />
              <div className="card-body bg-primary">
                <p className="text-center text-white">Click on Play Now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* customer review */}
      <div className="container">
        <h3 className="text-center">Our Happy users</h3>
        <div className="row mt-4 gx-3">
          <div className="col-md-6">
            <div className="p-3">
              <blockquote className="blockquote shadow p-3">
                <p>
                  “QuizApp! is a fantastic way to engage every single student -
                  even remotely."
                </p>
                <footer className="blockquote-footer text-left">
                  Harry potter
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3">
              <blockquote className="blockquote shadow p-3">
                <p>
                  “QuizApp! is a fantastic way to engage every single student -
                  even remotely."
                </p>
                <footer className="blockquote-footer text-left">
                  Harry potter
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;