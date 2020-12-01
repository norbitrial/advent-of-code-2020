import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleAnswer = async (input) => {
  logWelcome()
  const answer = parseInt(input)

  if (isNaN(answer) || answer < 1 || answer > 25) {
    console.log(`It's not a number between 1 and 25 ... :(`)
  } else {
    try {
      const filePath = `./day${('00' + answer).slice(-2)}`
      console.log(`Running ${filePath} challenge ...`)
      const code = await import(filePath)
      
      code.default()
    } catch {
      console.warn('\nSomething bad happened ...')
      console.warn('Maybe there is no code example for that day. :(')
    }
  }
  
  askForAnother()
}

const logWelcome = () => {
  console.clear()
  console.log('---------------------- Hello Friend! ----------------------')
  console.log('---                                                     ---')
  console.log('---       Welcome to Advent of Code 2020 solutions      ---')
  console.log('---                    by norbitrial                    ---')
  console.log('---                                                     ---')
  console.log('-----------------------------------------------------------\n')
}
const askForNumber = () => {
  logWelcome()
  rl.question(`Tell me which day's challange you'd like run? `, handleAnswer);
}
const closeSession = () => {
  rl.close();
  console.log('\n-----------------------------------------------------------')
  console.log('Thanks for having me here, see you later! :)')
}
const askForAnother = () => 
  rl.question(`\nDo you want to try another (y/n)? `, (e) => 
    e === 'y' ? askForNumber() : closeSession()
  );

logWelcome()
askForNumber()
askForAnother()