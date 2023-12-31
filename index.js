// Q1.Find Grades
// Your school has the following grading system based 
// upon the marks (M) obtained by a student: 
// If M≤10, the grade will be E. 
// If 11≥M≤20, the grade will be D. 
// If 21≥M≤30, the grade will be C. 
// If 31≥M≤40, the grade will be B. 
// If 41≥M≤50, the grade will be A. 
// Your friend will enter his marks out of 50, 
// and your task is to print his grades using 
// a switch statement.

// Solution :-

let marks;
let grade;
marks = +prompt("Enter the student mark out of 50.")
switch (true) {
    case (marks <= 10 && marks >= 0) : 
    grade = "E";
    break;
    case (marks <= 20 && marks >= 11) :
    grade = "D";
    break;
    case (marks <= 30 && marks >= 21) :
    grade = "C";
    break;
    case (marks <= 40 && marks >= 31) :
    grade = "B";
    break;
    case (marks <= 50 && marks >= 41) :
    grade = "A";
    break;
    default :
    grade = "Invalid input";
}
console.log(grade);
// ________________________________________________________________

// Q2. Get Value 
// You are provided with a table containing some 
// characters and their corresponding values. 
// Your task will be to find the value from the table 
// corresponding to an input character and return it.
// P or p - PrepBytes, Z or z - Zenith,
// E or e - Expert Coder, D or d - Data Structure 

// Solution :-

let output;
let input = prompt('enter a character');
if (input === 'p' || input === 'P') {
    output = 'PrepBytes'
    console.log(output);
} else if (input === 'z' || input === 'Z') {
    output = 'Zenith'
    console.log(output);
} else if (input === 'e' || input === 'E') {
    output = 'Expert Coder'
    console.log(output);
} else if (input === 'd' || input === 'D') {
    output = 'Data Structure'
    console.log(output);
} else {
    console.log('Invalid input');
}
// ____________________________________________________________


// Q3. Find the maximum out of three numbers. 
// Take three numbers and print the largest number 
// among them if all of three are same print −1.

// Solution :-

let a = +prompt("1st no.");
let b = +prompt("2nd no.");
let c = +prompt("3rd no.");

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else if(c > a && c > b) {
    console.log(c);
} else if (a == b && a == c){
    console.log(-1);
} else {
    console.log("Invalid input");
}
// _____________________________________________________________

// Q4. Second Smallest 
// You are given 3 distinct integers X, Y and Z 
// and your task is to find and return the second 
// smallest integer among the three provided integers.

// Solution :-

let X = +prompt("1st no.");
let Y = +prompt("2nd no.");
let Z = +prompt("3rd no.");

if ((X < Y && X > Z) || (X > Y && X < Z)) {
    console.log(X);
} else if ((Y < X && Y > Z) || (Y > X && Y < Z)) {
    console.log(Y);
} else {
    console.log(Z);
}

// _________________________________________________________________


// Q5. Check whether the triangle is Acute or Obtuse 
// Write a program takes takes three angles 
// and checks whether the triangle is acute or obtuse.

// Solution :-

let A = parseInt(prompt("Enter value of A"));
let B = parseInt(prompt("Enter value of B"));
let C = parseInt(prompt("Enter value of C"));

if (A + B + C === 180) {
    if (A > 90 || B > 90 || C > 90) {
        console.log("Obtuse triangle");
    } else {
        console.log("Acute triangle");
    }  
} else {
    console.log("Invalid input");
}