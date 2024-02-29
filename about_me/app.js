"use strict";

// Name question (Normal)
// let name = prompt("What's your name?", "Unknown");

// let welcome = document.querySelector("#welcome");

// let welcomeText = document.createTextNode(`Welcome To My Site ${name}`);

// welcome.appendChild(welcomeText);

// Name question (Function)
function askName() {
  let name = prompt("What's your name?", "Unknown");

  let welcome = document.querySelector("#welcome");

  let welcomeText = document.createTextNode(`Welcome To My Site ${name}`);

  welcome.appendChild(welcomeText);
}
askName();

let count = 0;

// q1 (Normal)
// let q1 = prompt("Do you think am fat?", "y/n or yes/no");
// let q1_Small = q1.toLowerCase();
// if (q1_Small === "y" || q1_Small === "yes") {
//   alert("Wrong!");
// } else if (q1_Small === "n" || q1_Small === "no") {
//   alert("Right!");
// }

// q1 (Function)
function q1() {
  let q1 = prompt("Do you think am fat?", "y/n or yes/no");
  let q1_Small = q1.toLowerCase();
  if (q1_Small === "y" || q1_Small === "yes") {
    alert("Wrong!");
  } else if (q1_Small === "n" || q1_Small === "no") {
    alert("Right!");
    count++;
  }
}
q1();

// q2 (Normal)
// let q2 = prompt("Do I like anime?", "y/n or yes/no");
// let q2_Small = q2.toLowerCase();
// if (q2_Small === "y" || q2_Small === "yes") {
//   alert("Right!");
// } else if (q2_Small === "n" || q2_Small === "no") {
//   alert("Wrong!");
// }

// q2 (Function)
function q2() {
  let q2 = prompt("Do I like anime?", "y/n or yes/no");
  let q2_Small = q2.toLowerCase();
  if (q2_Small === "y" || q2_Small === "yes") {
    alert("Right!");
    count++;
  } else if (q2_Small === "n" || q2_Small === "no") {
    alert("Wrong!");
  }
}
q2();

// q3 (Normal)
// let q3 = prompt("Do I like games?", "y/n or yes/no");
// let q3_Small = q3.toLowerCase();
// if (q3_Small === "y" || q3_Small === "yes") {
//   alert("Right!");
// } else if (q3_Small === "n" || q3_Small === "no") {
//   alert("Wrong!");
// }

// q3 (Function)
function q3() {
  let q3 = prompt("Do I like games?", "y/n or yes/no");
  let q3_Small = q3.toLowerCase();
  if (q3_Small === "y" || q3_Small === "yes") {
    alert("Right!");
    count++;
  } else if (q3_Small === "n" || q3_Small === "no") {
    alert("Wrong!");
  }
}
q3();

// q4 (Normal)
// let q4 = prompt("Do you think am short?", "y/n or yes/no");
// let q4_Small = q4.toLowerCase();
// if (q4_Small === "y" || q4_Small === "yes") {
//   alert("Wrong!");
// } else if (q4_Small === "n" || q4_Small === "no") {
//   alert("Right!");
// }

// q4 (Function)
function q4() {
  let q4 = prompt("Do you think am short?", "y/n or yes/no");
  let q4_Small = q4.toLowerCase();
  if (q4_Small === "y" || q4_Small === "yes") {
    alert("Wrong!");
  } else if (q4_Small === "n" || q4_Small === "no") {
    alert("Right!");
    count++;
  }
}
q4();

// q5 (Normal)
// let q5 = prompt("Do you think i wear glasses?", "y/n or yes/no");
// let q5_Small = q5.toLowerCase();
// if (q5_Small === "y" || q5_Small === "yes") {
//   alert(`Wrong! ${name}`);
// } else if (q5_Small === "n" || q5_Small === "no") {
//   alert(`Right! ${name}`);
// }

// q5 (Function)
function q5() {
  let q5 = prompt("Do you think i wear glasses?", "y/n or yes/no");
  let q5_Small = q5.toLowerCase();
  if (q5_Small === "y" || q5_Small === "yes") {
    alert(`Wrong! ${name}`);
  } else if (q5_Small === "n" || q5_Small === "no") {
    alert(`Right! ${name}`);
    count++;
  }
}
q5();

// q6 (Normal)
// let randomNumber = Math.floor(Math.random() * 10) + 1;
// for (i = 0; i < 4; i++) {
//   console.log(randomNumber);
//   let guess = parseInt(prompt("Guess the number!"));
//   if (guess > randomNumber) {
//     alert("Too High");
//   } else if (guess < randomNumber) {
//     alert("Too Low");
//   } else if (guess === randomNumber) {
//     alert("Right!");
//   }
// }
// alert(`The Number Is ${randomNumber}`);

// q6 (Function)
function q6() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let i = 0;
  for (i = 0; i < 4; i++) {
    console.log(randomNumber);
    let guess = parseInt(prompt("Guess the number!"));
    if (guess > randomNumber) {
      alert("Too High");
    } else if (guess < randomNumber) {
      alert("Too Low");
    } else if (guess === randomNumber) {
      alert("Right!");
      count++;
      break;
    }
  }
  alert(`The Number Is ${randomNumber}`);
}
q6();

// q7 (Normal)
// let randomNumber1 = Math.floor(Math.random() * 10) + 1;
// let randomNumber2 = Math.floor(Math.random() * 10) + 1;
// let randomNumber3 = Math.floor(Math.random() * 10) + 1;
// let randomNumber4 = Math.floor(Math.random() * 10) + 1;
// let randomNumber5 = Math.floor(Math.random() * 10) + 1;
// let randomNumber6 = Math.floor(Math.random() * 10) + 1;

// let randomArray = [
//   randomNumber1,
//   randomNumber2,
//   randomNumber3,
//   randomNumber4,
//   randomNumber5,
//   randomNumber6,
// ];
// console.log(randomArray);

// for (j = 0; j < 6; j++) {
//   let guess = parseInt(prompt("Guess The Number"));
//   for (k = 0; k < 6; k++) {
//     if (guess === randomArray[k]) {
//       alert("Right!");
//       break;
//     }
//   }
//   if (guess === randomArray[k]) {
//     break;
//   }
// }
// alert(`The Answers Are ${randomArray}`);

// q7 (Function)
function q7() {
  let randomNumber1 = Math.floor(Math.random() * 10) + 1;
  let randomNumber2 = Math.floor(Math.random() * 10) + 1;
  let randomNumber3 = Math.floor(Math.random() * 10) + 1;
  let randomNumber4 = Math.floor(Math.random() * 10) + 1;
  let randomNumber5 = Math.floor(Math.random() * 10) + 1;
  let randomNumber6 = Math.floor(Math.random() * 10) + 1;

  let randomArray = [
    randomNumber1,
    randomNumber2,
    randomNumber3,
    randomNumber4,
    randomNumber5,
    randomNumber6,
  ];
  console.log(randomArray);
  let j = 0;
  let k = 0;
  for (j = 0; j < 6; j++) {
    let guess = parseInt(prompt("Guess The Number"));
    for (k = 0; k < 6; k++) {
      if (guess === randomArray[k]) {
        alert("Right!");
        count++;
        break;
      }
    }
    if (guess === randomArray[k]) {
      break;
    }
  }
  alert(`The Answers Are ${randomArray}`);
}
q7();

alert(`Your score is ${count} out of 7`);
console.log(`Your score is ${count} out of 7`);
