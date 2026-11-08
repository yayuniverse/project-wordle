import React from "react";
import Guess from "./Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessViewer({ guessList, answer }) {
  const blankRows = NUM_OF_GUESSES_ALLOWED - guessList.length;
  console.log(guessList);

  return (
    <div className="guess-results">
      {guessList.map((guessWord, index) => {
        console.log(guessWord);
        return (
          <Guess
            key={index}
            guessWord={guessWord}
            answer={answer}
          />
        );
      })}
      {range(blankRows).map((num, index) => {
        console.log("blank");
        return <Guess key={index} />;
      })}
    </div>
  );
}

export default GuessViewer;
