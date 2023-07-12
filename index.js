#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let userName;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

const woeBigFatHead = `
                                                *///////////////////*            
                                ./////////////////*,,,,,,,,,,,,,,,////          
                  */////////////////*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,///         
            /////////*,,,,,,,,,,,,,,,,,,,,,,,,,***,    ***/,,,,,,,,,///,        
          ////,,,,,,,,,,,,*///*,,,,,,,,,,,,,,**     /*    .*/,,,,,,,,///        
         ///,,,,,,,,,,**/      .**/,,,,,,,,,/*   ////////   **,,,,,,,///        
        ///,,,,,,,,,**.   *///,   ***,,,,,,,/*   ////////   */,,,,,,,,///       
        ,//*,,,,,,,**,  *///////.  /*,,,,,,,,*/   *////.   /*,,,,,,,,,///       
         ///,,,,,,,,**  *///////.  /*,,,,,,,,,***       .***,,,,,,,,,,*//,      
         *//*,,,,,,,***   .///    ***,,,,,,,,,,,,,/****/,,,,,,,,,,,,,,*//,      
          ///,,,,,,,,,/**,     ****,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,////       
          ///,,,,,,,,,,,,,****,,,,,,,,,,,,,,,,***,,,,,,,,,,,,,,,,,*////.        
          .///,,,,,,,,,,,,,,,,,,,,,,,*******,,,,,,,,,,*/////////////,           
           ////,,,,,,,,,,,,,,,,,,,,,,,,*/////////////////*.                     
             /////,,,,,,,*/////////////////////                                 
                ////////////*.            //////                                
                                           /////*                               
                                           //////                               `;

// console.log(woeBigFatHead);

// async function welcomeBig() {
//   const utilityTitle = `Pezz's Password Utility v1.0.0`;
//   figlet(utilityTitle, (err, data) => {
//     console.log(gradient.pastel.multiline(data));
//     if (err) throw err;
//   });
//   await sleep();
// }

async function welcome() {
  const rainbowTitle = gradient.rainbow(woeBigFatHead);
  console.log(rainbowTitle);
  const utilityTitle = `Pezz's Password Jawn v1.0.0`;
  figlet(utilityTitle, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
  await sleep();

  console.log(`
  ${chalk.bgBlue(" Good Morning, Commander. ")}
  1) Generate Emails and Passwords
  2) Tell me something nice
  3) Daily Affirmation`);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "user_name",
    type: "input",
    message: "Please enter your username: ",

    default() {
      return "woebot";
    },
  });
  userName = answers.user_name;
}

async function question1() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "list",
    message: "JS was created in 10 days and then realased on...\n",
    choices: ["1", "2", "3", "4"],
  });
  return handleAnswer(answers.question_1 == "2");
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner("Checking answer...");
  await sleep();

  if (isCorrect) spinner.success({ text: `Great work ${playerName}. Legit!` });
  else {
    spinner.error({ text: `You killed me, ${playerName}` });
    process.exit(1);
  }
}

function winner() {
  console.clear();
  const msg = `Congrats ${playerName}, you win!`;
  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

await welcome(); // JS supports Top-level Await - Node 14+
// await welcomeBig();
await askName();
await question1();
await winner();
