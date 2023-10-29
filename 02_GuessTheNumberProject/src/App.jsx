import './App.css'
import React, {useState} from 'react';


function App() {
    const maxAttempts = 10; // Define the maximum number of attempts
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [userGuess, setUserGuess] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);
    const [hint, setHint] = useState('Please start the Guess Game');
    const [guessCount, setGuessCount] = useState(maxAttempts); // Initialize with max attempts
    const [gameOver, setGameOver] = useState(false); // State to track game over state

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    const handleUserGuessChange = (event) => {
        setUserGuess(event.target.value);
        setHint('');
        console.log(randomNumber)
    };

    const checkUserGuess = () => {
        const guess = parseInt(userGuess, 10);
        if (!isNaN(guess)) {
            setGuessHistory([...guessHistory, guess]);
            setUserGuess('');
            checkGuess(guess);
        } else {
            // Optionally, you can handle invalid input here without using alerts
        }
    };

    const checkGuess = (guess) => {
        setGuessCount(guessCount - 1); // Decrease attempts by 1

        if (guess === randomNumber) {
            setRandomNumber(generateRandomNumber());
            setGuessHistory([]);
            setHint('Congratulations! You guessed the correct number.');
            setGuessCount(maxAttempts); // Reset attempts to max
            setGameOver(true); // Set game over state
        } else if (guess > randomNumber) {
            setHint('Your guess is too high.');
        } else {
            setHint('Your guess is too low.');
        }

        if (guessCount <= 0) {
            setHint(`Sorry, you've run out of attempts. The correct number was ${randomNumber}.`);
            setRandomNumber(generateRandomNumber());
            setGuessHistory([]);
            setGuessCount(maxAttempts); // Reset attempts to max
            setGameOver(true); // Set game over state
        }
    };

    const restartGame = () => {
        setRandomNumber(generateRandomNumber());
        setGuessHistory([]);
        setHint('Please start the Guess Game');
        setGuessCount(maxAttempts);
        setGameOver(false); // Reset game over state
    };

    return (
        <>
            <h1>Guess the Number</h1>

            {hint && <h2>{hint}</h2>}

            {gameOver ? (
                <button onClick={restartGame}>Start Again</button>
            ) : (
                <div>
                    <input
                        type="text"
                        id="userGuess"
                        value={userGuess}
                        onChange={handleUserGuessChange}
                    />
                    <br />
                    <br />
                    <button onClick={checkUserGuess}>Check Guess</button>
                </div>
            )}

            <div>
                <ul>
                    {guessHistory.map((guess, index) => (
                        <li key={index}>Previous guess is -> {guess}</li>
                    ))}
                </ul>
            </div>
            <p>Attempts remaining: {guessCount}</p>
        </>
    );
}

export default App;
