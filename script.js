const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'gun' || userInput === 'rifle' || userInput === 'bomb' || userInput === 'tank') {
      return userInput;
    } else {
      console.log('error')
    }
    }
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      switch(randomNumber) {
        case 0: 
        return 'rock';
        case 1:
        return 'scissors';
        case 2:
        return 'paper';
      }
      }
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice) {
        return 'the game is a tie'
      }
      if (userChoice === 'rock') {
        if(computerChoice === 'paper') {
          return 'the computer won!'
        } else {
          return 'you won!'
        }
      }
      if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'the computer won!'
        } else {
          return 'you won!'
        }
      } 
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'the computer won!'
        } else {
          return 'you won!'
        }
      }
      if (userChoice === 'bomb' || 'gun' || 'rifle' || 'tank') {
        return 'you won by a long shot!'
      }
    }
    const playGame = () => {
      const userChoice = getUserChoice('scissors');
      const computerChoice = getComputerChoice();
      console.log('You went: ' + userChoice);
      console.log('The computer went: ' + computerChoice);
      console.log(determineWinner(userChoice, computerChoice));
    }
    playGame();