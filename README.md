[![CircleCI](https://circleci.com/gh/norbitrial/advent-of-code-2020.svg?style=shield&circle-token=d18854d2a0647b65366601a14dd753679e8f84d8)](https://app.circleci.com/pipelines/github/norbitrial/advent-of-code-2020?branch=main) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Advent of Code 2020 🎄👨‍💻

This repository is made for participating in [Advent of Code 2020](https://adventofcode.com/2020/about) event _which is still ongoing_. 🚧

Testing is really important even with small units, based on this rule _most of the functions_ are covered with **jest** test cases. _Mainly_ focusing on **TDD** ([Test-driven development](https://en.wikipedia.org/wiki/Test-driven_development)) instead of _quick and dirty_ solutions in this repository.

In the meantime check out my website: https://szabonorbert.me 🌐

[LinkedIn](https://www.linkedin.com/in/norbertszabo1988/) 📝 | [My first game - Feed the Turtle](https://feed-the-turtle.szabonorbert.me/) 🐢 | [StackOverflow Profile](https://stackoverflow.com/users/7599510/norbitrial?tab=profile) 🔮

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

| Day                                       | Title                                             | Example Input                     | Solution Files                                                                                     |     |
| ----------------------------------------- | ------------------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- | --- |
| [01](https://adventofcode.com/2020/day/1) | [Report Repair](/src/day01/description.txt)       | [input.txt](/src/day01/input.txt) | [Part One](/src/day01/findTwoSum.ts) [Part Two](/src/day01/findThreeSum.ts)                        | ✅  |
| [02](https://adventofcode.com/2020/day/2) | [Password Philosophy](/src/day02/description.txt) | [input.txt](/src/day02/input.txt) | [Part One](/src/day02/getCountOfValidPass.ts) [Part Two](/src/day02/getCountByPosition.ts)         | ✅  |
| [03](https://adventofcode.com/2020/day/3) | [Toboggan Trajectory](/src/day03/description.txt) | [input.txt](/src/day03/input.txt) | [Part One & Two](/src/day03/getCountOfTrees.ts)                                                    | ✅  |
| [04](https://adventofcode.com/2020/day/4) | [Passport Processing](/src/day04/description.txt) | [input.txt](/src/day04/input.txt) | [Part One & Two](/src/day04/getCountOfValidPass.ts)                                                | ✅  |
| [05](https://adventofcode.com/2020/day/5) | [Binary Boarding](/src/day05/description.txt)     | [input.txt](/src/day05/input.txt) | [Part One & Two](/src/day05/index.ts)                                                              | ✅  |
| [06](https://adventofcode.com/2020/day/6) | [Custom Customs](/src/day06/description.txt)      | [input.txt](/src/day06/input.txt) | [Part One](/src/day06/quickAndDirty/part01.ts) [Part Two](/src/day06/quickAndDirty/part02.ts)      | ✅  |
| [07](https://adventofcode.com/2020/day/7) | [Handy Haversacks](/src/day07/description.txt)    | [input.txt](/src/day07/input.txt) | [Part One](/src/day07/helpers/getBagColorsCount.ts) [Part Two](/src/day07/helpers/getBagsCount.ts) | ✅  |
| [08](https://adventofcode.com/2020/day/8) | [n/a](/src/day08/description.txt)                 | [input.txt](/src/day08/input.txt) | [Part One](/src/day08/part01.ts) [Part Two](/src/day08/part02.ts)                                  | ❓  |

## Testing 🧪

Running test cases and generating code coverage report with `npm test`. The coverage report can be found after runing tests in `/coverage` folder. See an example from the terminal:

![Jest-Screenshot](/assets/example_screenshot_02.png)

Have a nice day! 👋
