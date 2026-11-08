import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Field from "./Field";
import GuessViewer from "./GuessViewer";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "./Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  function updateGuessList(guess) {
    if (guessList.length < NUM_OF_GUESSES_ALLOWED) {
      setGuessList([...guessList, guess]);
    }
  }

  const isWon = [...guessList].pop() === answer;
  const isLost = !isWon && guessList.length >= NUM_OF_GUESSES_ALLOWED;

  return (
    <div>
      <GuessViewer guessList={guessList} answer={answer} />
      <Field
        updateGuessList={updateGuessList}
        disabled={isWon || isLost}
      />
      {isWon && (
        <Banner type={"win"} answer={answer} numOfGuesses={guessList.length} />
      )}
      {isLost && <Banner type={"lose"} answer={answer} />}
    </div>
  );
}

export default Game;
