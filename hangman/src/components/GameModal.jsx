export const GameModal = (props) => {
    const { gameOver, currentWord, resetGame, gameState } = props;
    return (
        <div
            className={
                "fixed w-full h-full  bg-[rgba(0,0,0,0.3)] p-10 top-0 left-0  flex flex-col items-center justify-center" +
                (gameOver ? " " : " hidden")
            }
        >
            <div className=" max-w-[300px] max-h-[230px] sm:max-w-[400px] sm:max-h-[300px]  w-full bg-white rounded-md flex flex-col items-center gap-4 p-4">
                <img
                    src={
                        gameState === "win"
                            ? "../src/assets/images/victory.gif"
                            : "../src/assets/images/lost.gif"
                    }
                    alt="victory"
                    className="sm:w-[100px] sm:h-[100px]  w-[70px] h-[70px]"
                />
                <h2 className=" text-lg sm:text-xl uppercase font-semibold tracking-wider">
                    {gameState === "win" ? "Congratulation" : "Game Over"}
                </h2>
                <h3 className="text-sm sm:text-md">
                    The Correct word is{" "}
                    <span className="text-purple-800 font-semibold">
                        {currentWord}
                    </span>
                </h3>
                <button
                    onClick={resetGame}
                    className="bg-purple-700 text-sm md:text-md text-white sm:px-4 sm:py-2 px-2 py-1 rounded-lg hover:opacity-90 duration-200"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};
