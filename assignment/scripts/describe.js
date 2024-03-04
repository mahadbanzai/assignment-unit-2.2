// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called "name" and make the value 'Dane'
// Then an if,else statement is created using another variable 'Mary'
// The if,else statement says "if the name is 'Mary', then console.log will show 'Hi, Mary'. If not, then console.log will make 'How do you do' appear instead"
// since the name is set to 'Dane' it would show console.log('How do you do?')

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable 'secret' and assign no value to it
// then we create a variable 'code' and let it be equal to 123
// an if statement is created stating if the code is 123 then the value of secret will be "super" but then, the value of code was adjusted to code times 2 which is now 246
// another if statement is made and states if code is greater than 250 the value of secret will be "duper"
// console.log(secret) will appear as 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we gave our variables values and put them in a compound conditional statement
// It states that if isStudent is true and the zip is greater than 00000, console.log(`You're a student on the West Coast!)
// However at the same time if isStudent is false OR the age is younger than 30, console.log('What are your hobbies?'); [Which isn't the case]
//Lastly if isStudent is true which in this case it is console.log('Welcome to Prime!'); will appear
//Even though the last statement is true, the first correct statement will be the one to appear, so   console.log(`You're a student on the West Coast!`); will show



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* FIX - It asks to set colorOne and colorTwo to purple so it needs to include a variable for purple, I believe you have to do colorOne + colorTwo = purple. Or possibly create another variable called colorThree and have it set to purple.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/* Time cannot be a constant it has to be a variable considering that in this problem time can be greater or equal to 4. Also the statement says AND and the || represents OR. You would need &&
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/* console.log will show 'no entry') instead of 'enter' due to what the conditonal is stating. I would switch the names in the logs to make this properly function.
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

