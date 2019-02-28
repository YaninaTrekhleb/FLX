const maxRandomNumber = 5;
const maxAttempts = 3;
const prizeMultiplier = 3;
const minFirstPrize = 10;
const minSecondPrize = 5;
const minThirdPrize = 2;

if (!confirm('Do you want to play a game?')) {
    alert('You did not become a millionaire, but can.');
} else {
    let gameRound = 1;
    let prize = 0;
    const firstRound = 1;
    let currentMaxNumber = maxRandomNumber;

    // Prevent 'no-magic-numbers' eslint errors.
    const randomNumberShift = 1;
    const currentPrizeMultiplierShift = 1;
    const maxAttemptShift = 1;
    const firstAttempt = 1;
    const secondtAttempt = 2;
    const thirdAttempt = 3;
    const startAttempt = 1;
    const currentMaxNumberMultiplier = 2;
    const defaultMaxNumberMultiplier = 1;

    while (gameRound === firstRound || confirm('Do you want to continue?')) {
        currentMaxNumber *= gameRound === firstRound ? defaultMaxNumberMultiplier : currentMaxNumberMultiplier;
        const randomNumber = Math.floor(Math.random() * (currentMaxNumber + randomNumberShift));
        let userWon = false;
        let attemptNumber;
    
        const currentPrizeMultiplier = Math.pow(prizeMultiplier, gameRound - currentPrizeMultiplierShift);

        const firstPrize = minFirstPrize * currentPrizeMultiplier;
        const secondPrize = minSecondPrize * currentPrizeMultiplier;
        const thirdPrize = minThirdPrize * currentPrizeMultiplier;

        let possiblePrize = 0;

        for (attemptNumber = startAttempt; attemptNumber <= maxAttempts; attemptNumber++) {
            switch (attemptNumber) {
                case firstAttempt: 
                 possiblePrize = firstPrize;
                 break;
     
                case secondtAttempt: 
                 possiblePrize = secondPrize;
                 break;
             
                case thirdAttempt: 
                 possiblePrize = thirdPrize;
                 break;

                default:
                 break;
            }

            let question = `Enter a number from 0 to ${currentMaxNumber}\n`;
            question += `Attempts left: ${maxAttempts - attemptNumber + maxAttemptShift}\n`;
            question += `Total prize: ${prize}$\n`;
            question += `Possible prize on current attempt: ${possiblePrize}$`; 

            const guessedNumber = parseInt(prompt(question));
            
            if (guessedNumber === randomNumber) {
                userWon = true;
                break;
            }
        }
    
        if (!userWon) {
            alert(`Thank you for a game. Your prize is: ${prize}$`);  
            prize = 0;
            gameRound = firstRound;
            currentMaxNumber = maxRandomNumber;
        } else {
            prize += possiblePrize;
            alert(`Thank you for a game. Your prize is: ${prize}$`);
            gameRound++;
        }
    }

    alert(`Thank you for a game. Your prize is: ${prize}$`);
}
