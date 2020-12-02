# Advent of Code 2020 by norbitrial 🎄👨‍💻

This repository is made for participating in [Advent of Code 2020](https://adventofcode.com/2020/about) event.

## Guide to use 📙

After cloning the repository run the following commands:

- `npm install` to install required dependencies
- `npm run build` to build all the _TypeScript_ files
- `npm start` to build and run the application
- `npm test` to run jest test cases and generating code coverage report

The build command will place all the complied _JavaScript_ files in the `dist` folder.

Screenshot from the helper app:

![App-Screenshot](/assets/example_screenshot_01.png)

## Solutions for each days 🔮

See below my solutions separated by day:

| Day                                       | Title                                             | Example Input                     | Solution Files                                                                             |
| ----------------------------------------- | ------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------ |
| [01](https://adventofcode.com/2020/day/1) | [Report Repair](/src/day01/description.txt)       | [input.txt](/src/day01/input.txt) | [Part One](/src/day01/findTwoSum.ts) [Part Two](/src/day01/findThereSum.ts)                |
| [02](https://adventofcode.com/2020/day/2) | [Password Philosophy](/src/day01/description.txt) | [input.txt](/src/day02/input.txt) | [Part One](/src/day02/getCountOfValidPass.ts) [Part Two](/src/day02/getCountByPosition.ts) |
|                                           |                                                   |                                   |

## Testing 🧪

Testing is really important even with small units, based on this rule most of the functions are covered with **jest** test cases. Running test cases and generating code coverage report with `npm test`. The coverage report can be found after runing tests in `/coverage` folder. See an example from the terminal:

![Jest-Screenshot](/assets/example_screenshot_02.png)

Have a nice day! 👋
