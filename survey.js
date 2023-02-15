const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arrayOfAnswers = [];

rl.question(
  "What is your name? Nicknames are also acceptable :) ",
  (answer) => {
    arrayOfAnswers.push(`${answer}`);

    rl.question("What's an activity you like doing? ", (answer) => {
      arrayOfAnswers.push(`${answer}`);

      rl.question("What type of music do you listen to while doing that? ", (answer) => {
        arrayOfAnswers.push(`${answer}`);
        
        rl.question("Which meal is your favourite? ", (answer) => {
          arrayOfAnswers.push(`${answer}`);
          
          rl.question("What is your favourite thing to eat for that meal? ", (answer) => {
            arrayOfAnswers.push(`${answer}`);
            
            rl.question("Which sport is your absolute favourite? ", (answer) => {
              arrayOfAnswers.push(`${answer}`);
              
              rl.question("What is your superpower? In a few words, tell us what you're amazing at! ", (answer) => {
                arrayOfAnswers.push(`${answer}`);
                console.log(`${arrayOfAnswers[0]} likes listening to ${arrayOfAnswers[2]} while ${arrayOfAnswers[1]}, prefers ${arrayOfAnswers[5]} over any other sport, loves eating ${arrayOfAnswers[4]} for ${arrayOfAnswers[3]} and is amazing at ${arrayOfAnswers[6]}.`);

                rl.close();
              });
            });
          });
        });
      });
    });
  }
);

