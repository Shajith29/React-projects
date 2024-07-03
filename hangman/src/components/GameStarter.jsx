import { useEffect, useState } from "react";
import wordList from "../word-list";
import { GameModal } from "./GameModal";

export const GameStarter = () => {
    const letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    const [currentWord, setCurrentWord] = useState("");
    const [hint, setHint] = useState("");
    const [gameOver, setGameOver] = useState(false);
    const [gameState, setGameState] = useState("");
    const [correctLetter, setCorrectLetter] = useState([]);
    const [guessedLetter, setGuessedLetter] = useState([]);
    const [guessCount, setGuessCount] = useState(0);
    const [isClicked, setIsClicked] = useState([]);

    const handleGetText = (element, clickedLetter) => {
        if (currentWord.includes(clickedLetter)) {
            [...currentWord].forEach((letter, idx) => {
                if (letter === clickedLetter) {
                    updateGuessedLetter(letter, idx);
                    setCorrectLetter((prev) => [...prev, clickedLetter]);
                }
            });
        } else {
            setGuessCount((prev) => prev + 1);
        }
    };

    console.log(gameOver);

    const getRandomWords = () => {
        const { word, hint } =
            wordList[Math.floor(Math.random() * wordList.length)];
        setCurrentWord(word);
        setHint(hint);
        const dash_arr = word.split("").map((ele) => "_");
        setGuessedLetter(dash_arr);
    };

    const updateGuessedLetter = (letter, index) => {
        const cpyGuessedLetter = guessedLetter;
        cpyGuessedLetter[index] = letter;
        setGuessedLetter(cpyGuessedLetter);
    };

    const resetGame = () => {
        setGameOver(false);
        setGuessCount(0);
        setCorrectLetter([]);
        setGameState("");
        getRandomWords();
        setIsClicked([]);
    };

    useEffect(() => {
        getRandomWords();
    }, []);

    useEffect(() => {
        setGameOver(false);
        if (guessCount === 6) {
            setGameOver(true);
            setGameState("lose");
            return;
        }

        if (
            currentWord.length === correctLetter.length &&
            !guessedLetter.includes("_")
        ) {
            setGameOver(true);
            setGameState("win");
            return;
        }
    }, [guessCount, gameOver, correctLetter]);

    return (
        <div className="bg-purple-600 min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-[400px]  max-h-[520px]  flex-col md:flex-row lg:flex-row sm:flex-row sm:max-w-[520px] sm:p-3 md:p-5  lg:p-8 md:max-w-[650px] lg:max-w-[750px] w-full p-12 bg-white rounded-lg shadow-lg flex items-center">
                <div className="h-[40%]  w-full sm:h-auto md:h-auto sm:flex-col md:flex-col lg:flex-col p-2  md:w-[40%] sm:w-[50%] sm:p-4">
                    <img
                        src={`../src/assets/images/hangman-${guessCount}.svg`}
                        className=" w-[130px] mx-auto h-[130px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
                        alt="hangman-img"
                    />
                    <h2 className="mt-5 text-center text-lg sm:text-lg sm:w-[full] md:text-xl uppercase text-purple-600 font-semibold w-full">
                        Hangman Game
                    </h2>
                </div>
                <div className=" h-[60%] w-full  sm:w-[60%] sm:py-4 sm:px-4 flex flex-col items-center  justify-center gap-5">
                    <ul className="list-none flex gap-2 sm:gap-4 text-lg sm:text-xl my-2 ">
                        {guessedLetter &&
                            guessedLetter.map((ele, idx) => {
                                return <li key={idx}>{ele}</li>;
                            })}
                    </ul>
                    <h3 className="text-purple-700 h-[25px] text-sm sm:text-md md:text-lg text-center w-full my-2">
                        {hint}
                    </h3>
                    <h4 className="text-sm sm:text-md md:text-lg sm:mt-5 ">
                        Incorrect Guesses:{" "}
                        <span className="text-red-500">{guessCount} / 6</span>
                    </h4>
                    <div className="flex items-center   sm:mt-3 flex-wrap justify-center w-full">
                        {letters.map((letter, idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={(e) => {
                                        handleGetText(e.target, letter);
                                        setIsClicked((prev) => [...prev, idx]);
                                    }}
                                    className={
                                        "sm:w-[24px] sm:h-[24px] md:w-[28px] md:h-[28px] w-[23px]  h-[23px] text-md  text-center rounded-sm  text-white uppercase  bg-purple-600 m-1" +
                                        (isClicked.includes(idx)
                                            ? " guessed-letter"
                                            : " ")
                                    }
                                >
                                    {letter}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            {gameOver ? (
                <GameModal
                    gameOver={gameOver}
                    gameState={gameState}
                    currentWord={currentWord}
                    resetGame={resetGame}
                />
            ) : (
                ""
            )}
        </div>
    );
};
