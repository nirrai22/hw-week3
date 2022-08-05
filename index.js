const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",

  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Lwandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],

  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
};

console.log("first");

//task1
console.log(game.scored);

// for (let Counter = 0; Counter < game.scored; Counter++) {
// console.log(`Goal ${Counter + 1}${game.scored[Counter]}`);
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1} ${game.scored[i]}`);
}

// //task2
const oddValues = Object.values(game.odds);
console.log(oddValues);
sum = 0;
for (let r = 0; r < oddValues.length; r++) {
  sum = sum + oddValues[r];
  console.log(sum);
}
//   console.log('average is ${sum/oddValues.length})
console.log(`average is ${sum / oddValues.length}`);

//task3
for (const k in game.odds) {
  if (game[k]) {
    console.log(`Odd of victory ${game[k]}: ${game.odds[k]}`);
  } else {
    console.log(`Odd of draw: ${game.odds[k]}`);
  }
}

//taskbonus
function printGoals(goalscorers) {
  const result = {};
  for (let i = 0; i < goalscorers.length; i++) {
    if (result[goalscorers[i]]) {
      result[goalscorers[i]]++;
    } else {
      result[goalscorers[i]] = 1;
    }
  }
  return result;
}

// console.log(printGoals(game.scored));

for (const k in game.odds) {
  if (game[k]) {
    console.log(game[k], game.odds[k]);
  } else {
    console.log("draw", game.odds[k]);
  }
}

console.log(Object.entries(printGoals(game.scored)).sort());

//week4 task1
const gameEvents = new Map([
  [17, "GOAL"],
  [36, "Substitution"],
  [47, "GOAL"],
  [61, "Substitution"],
  [64, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "Yellow Card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

//task2
//After the game has finished, is was found that the yellow card from minute 64 was unfair.
//So remove this event from the game events log.

gameEvents.delete(64);
console.log(gameEvents);

//task3
//Compute and log the following string to the console:
//"An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const gameTime = 90;
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//task4
//Loop over 'gameEvents' and log each element to the console,
// marking whether it's in the first half or second half (after 45 min) of the game

for (const [min, value] of gameEvents) {
  console.log(`[${min < 45 ? "1" : "2"} half] ${min} : ${value}`);
}
