import { parse } from "path";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const handleAnswer = (input) => {
  logWelcome()
  const answer =  parseInt(input)

  if (isNaN(answer)) {
    console.log(`It's not a number between 1 and 25 ... :(`)
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
  rl.question(`Do you want to try another (y/n)? `, (e) => 
    e === 'y' ? askForNumber() : closeSession()
  );

logWelcome()
askForNumber()
askForAnother()