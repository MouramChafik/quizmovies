import { Outlet, useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import UserId from "./components/UserId/UserId";
import styles from "./App.module.css";
import Api from "./components/Api/Api";
import LogicAnswers from "./components/LogicAnswers/LogicAnswers";
import Answers from "./components/Answers/Answers";
import Header from "./components/Header/Header";
import QuizChoose from "./assets/logoSmile2.png";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [answers, setAnswers] = useState("");
  const [answersReturn, setAnswersReturn] = useState(true);
  const [userId, setUserId] = useState(null);
  const [film, setFilm] = useState({
    backdrop_path: "xxx",
    original_language: "en",
  });
  const [score, setScore] = useState(0);
  const [check, setCheck] = useState(false);
  const [please, setPlease] = useState(false);
  const [next, setNext] = useState(false);
  const reset = useRef(true);
  const handleUserIdEntered = (pseudo) => {
    setUserId(pseudo);
  };
  const navigate = useNavigate();
  const [timeDifficulty, setTimeDifficulty] = useState("20");
  const [burger, setBurger] = useState(false);
  const [color, setColor] = useState(false);
  const [quizType, setQuizType] = useState("");

  function handleChangeMode(e) {
    setNext(true);
    const element = reset;
    setAnswersReturn(true);
    element.current = false;
    navigate(e.target.value);
    setQuizType(e.target.value);
    setBurger(false);
  }

  function getColor() {
    if (color === true) {
      return "#03b309";
    }
    return "red";
  }

  return (
    <><div className={styles.appAllContainer}>
      <select
        id={styles.difficulty}
        onChange={(e) => setTimeDifficulty(e.target.value)}
      >
        <option value="">Difficulty ?</option>
        <option value="30">easy (30s)</option>
        <option value="20">medium (20s)</option>
        <option value="10">hard (10s)</option>
      </select>
      {answersReturn === true ? (
        <Api
          film={film}
          setFilm={setFilm}
          setAnswersReturn={setAnswersReturn}
          setNext={setNext}
          reset={reset}
          setPlease={setPlease}
          setColor={setColor} />
      ) : null}
      <div className={styles.appAll}>
        <div className={styles.appHeader}>
          <Header
            userId={userId}
            score={score}
            selectedAvatar={selectedAvatar} />
        </div>
        <div className={styles.appBody}>
          {userId !== null && selectedAvatar !== null && quizType === "" ? (
            <div className={styles.chooseQuizType}>
              <img src={QuizChoose} alt="Choose the type of your quiz" className={styles.ChooseImg} />
              <p>Choose the theme of the quiz 😊</p>
            </div>
          ) : (
            <>
              {film !== null ? (
                <Outlet
                  context={[film, reset, userId, setNext, next, timeDifficulty]} />
              ) : (
                <p>loading</p>
              )}
              {check === true ? (
                <LogicAnswers
                  answers={answers}
                  film={film}
                  setAnswersReturn={setAnswersReturn}
                  answersReturn={answersReturn}
                  setScore={setScore}
                  score={score}
                  setFilm={setFilm}
                  setAnswers={setAnswers}
                  Api={<Api />}
                  setCheck={setCheck}
                  setPlease={setPlease}
                  setNext={setNext}
                  next={next}
                  setColor={setColor} />
              ) : null}
              <Answers
                setAnswersReturn={setAnswersReturn}
                answers={answers}
                setAnswers={setAnswers}
                setCheck={setCheck}
                next={next}
                reset={reset} />
              {next === true ? (
                <p
                  className={styles.response}
                  style={{
                    color: getColor(),
                  }}
                >
                  {film.original_title}
                </p>
              ) : null}
              {please === true && next !== true ? (
                <p className={styles.retry}>No! Please try again!</p>
              ) : null}
              {userId === null || selectedAvatar === null ? (
                <UserId
                  setStateUserId={handleUserIdEntered}
                  setAvatarSelected={setSelectedAvatar} />
              ) : null}
            </>
          )}
        </div>
      </div>
      <div className={styles.appMenu}>
        <select
          className={styles.dropDownMenu}
          onChange={(e) => handleChangeMode(e)}
        >
          <option value="">Theme ?</option>
          <option value="/images">Image</option>
          <option value="/synopsis">Synopsis</option>
        </select>
        <button
          id={styles.buttonBurger}
          type="button"
          onClick={() => setBurger((prevState) => !prevState)}
        >
          Quiz
        </button>
        {burger === true ? (
          <div className={styles.burgerMenu}>
            <select onChange={(e) => setTimeDifficulty(e.target.value)}>
              <option value="">difficulty ?</option>
              <option value="30">easy (30s)</option>
              <option value="20">medium (20s)</option>
              <option value="10">hard (10s)</option>
            </select>
            <select onChange={(e) => handleChangeMode(e)}>
              <option value="">Theme of quiz ?</option>
              <option value="/images">Image</option>
              <option value="/synopsis">Synopsis</option>
            </select>
          </div>
        ) : null}
      </div>
    </div><footer>
        <Footer />
      </footer></>
  );
}

export default App;
