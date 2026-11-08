function Banner({ type, numOfGuesses, answer }) {
  if (type === "win")
    return (
      <div className="happy banner">
        <p>
          <strong>
            Congratulations. Got it in {numOfGuesses}{" "}
            {numOfGuesses > 1 ? "guesses" : "guess"}
          </strong>
        </p>
      </div>
    );
  else if (type === "lose")
    return (
      <div className="sad banner">
        <p>
          <strong>Sorry, the correct answer is {answer}</strong>
        </p>
      </div>
    );
}

export default Banner;
