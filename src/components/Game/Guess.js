import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guessWord, answer }) {
  const result = checkGuess(guessWord, answer);
  console.log(result)
  console.log(answer)

  if (result) {
    return (
      <p className="guess">
        {result.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))}
      </p>
    );
  } else {
    return (
      <p className="guess">
        {range(5).map((index) => (
          <span key={index} className="cell"></span>
        ))}
      </p>
    );
  }
}

export default Guess;
