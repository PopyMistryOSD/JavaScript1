// var number = 2.5678;
// num=toString(num)
// num = parseInt(num);
// num = parseFloat(num);
// console.log(typeof(num));
// console.log(number.toPrecision(3))
// console.log(typeof(Number("12")))
// console.log(typeof(Number("12.5")))
// console.log(Number("12.5"))
// console.log(Number(true));
// console.log(Number(false));

///****2.Area of various shapes:---
// var base = parseFloat(prompt("Enter base =" ));
// var base2 = parseFloat(prompt("Enter base2 =" ));
// var hight = parseFloat(prompt("Enter hight = "));
// var area = base * hight;
// var area2 = (base * hight)/2;
// var area3 = (base + base2)*hight/2;
// document.write("Area = "  + area +"<br/>");
// document.write("Area2 = "  + area2 +"<br/>");
// document.write("Area3 = "  + area3 +"<br/>");

///*****3.How to make temperature converter:----
//Fahrenheit to Celsius convert---
// var farn = parseFloat(prompt("Enter Fahrenheit : "));
// var cels = (farn-32) * (5/9);
// document.write("Celsius = " + cels);

////Celsius to Fahrenheit convert---

// var cels = parseFloat(prompt("Enter Celsius : "));
// var farn = (cels*(9/5)) + 32;
// document.write("Fahrenheit = " + farn);

///***4. Relational and Logical Operator----
// var num1 = 20;
// var num2 = 25;
// var x = num1>= num2;
// document.write(x);
// var num =6;
// if(num % 2 ==0);
//     console.log("Even")

// if (num % 2 != 2);
//     console.log("odd");  

////****Task 4. if, else if, else.program..
///Answer:-
// var marks = prompt("Enter your marks here: ");

// if (marks >= 80 && marks <= 100)
//     console.log("A+");
// else if (marks >= 70 && marks <= 79)
//     console.log("A");
// else if (marks >= 60 && marks <= 69)
//     console.log("A-");
// else if (marks >= 50 && marks <= 59)
//     console.log("B");
// else if (marks >= 40 && marks <= 49)
//     console.log("C");
// else if (marks >= 33 && marks <= 39)
//     console.log("D");
// else
//   console.log("Fail");

////**Nagitive & positive */
// var num = prompt("Enter a number : ");
// if (num > 0)
//     console.log("Positive");
// else if (num < 0)
//     console.log("Nagitive");
// else if (num < 0)
//     console.log("Nagitive");   
// else 
//     console.log("Zero");

//////****Letter Grade Program:------
// var marks = prompt("Enter your markes :");
// if (marks >= 80)
//     console.log("A+");
// else if (marks >= 70)
//     console.log("A");
// else if (marks >= 60)
//     console.log("A-");
// else if (marks >= 50)
//     console.log("B");
// else if (marks >= 40)
//     console.log("C");
// else if (marks >= 33)
//     console.log("D");
// else
//     console.log("Fail");

//////1.Programs using logical operators:---------
// var marks = prompt("Enter your markes :");
//  if (marks >= 100 || marks <= 0)
//     console.log("Invalide marks");

// else if (marks >= 80 && marks <= 100)
//     console.log("A+");
//  else if (marks >= 70 && marks <= 79)
//     console.log("A");
// else if (marks >= 60  && marks <= 69)
//     console.log("A-");
// else if (marks >= 50  && marks <= 59)
//     console.log("B");
// else if (marks >= 40  && marks <= 49)
//     console.log("C");
// else if (marks >= 33  && marks <= 39)
//     console.log("D");
// else
//     console.log("Fail");
/////////////2.Programs using logical operators:---------
// var num1 =prompt("Enter num1 : ");
// var num2 =prompt("Enter num1 : ");
// var num3 =prompt("Enter num1 : ");
// if (num1>num2 && num1>num3)
//     console.log("Large number = " + num1)

// else if (num2>num1 && num2>num3)
//     console.log("Large number = " + num2)

// else 
//     console.log("Large number = " + num3)

///////3.Programs using logical operators:-----vowel & consonant
// var letter = prompt("Enter a letter : ");
// letter = letter.toLowerCase();
// if (letter == "a" || letter =="e"|| letter=="i"|| letter =="o" ||letter =="u")
//     console.log("Vowel");

// else 
//     console.log("Consonant");

/////////****Switch:----digit spelling
///0 - Zero, 1- One....9 - Nine ,10 - Not a valid digit...//
// var digit = prompt("Enter a new digite :");
// if (digit == 0)
//     console.log("Zero");
// else if (digit == 1)
//     console.log("One");
// else if (digit == 2)
//     console.log("Two");
// else  if (digit == 3)
//     console.log("Three");
// else if (digit == 4)
//     console.log("Four");
// else if (digit == 5)
//     console.log("Five");  
// else if (digit == 6)
//     console.log("Six");
// else if (digit == 7)
//     console.log("Seven");
// else if (digit == 8)
//     console.log("Eight");
// else if (digit == 9)
//     console.log("Nine");
// else 
//     console.log("Not a valid digit");
   
 ///////****Switch, case, break, default ar kaj *****...// 

//  var digit = prompt("Enter a new digite :");
//  switch (digit){
//     case "0":
//         console.log("Zero");
//         break;
//     case "1":
//         console.log("Zero");
//         break;
//     case "2":
//         console.log("Two");
//         break;
//     case "3":
//         console.log("Three");
//         break;
//     case "4":
//         console.log("Four");
//         break;
//     case "5":
//         console.log("Five");
//         break;
//     case "6":
//         console.log("Six");
//         break;
//     case "7":
//         console.log("Seven");
//         break;
//     case "8":
//         console.log("Eight");
//         break;
//     case "9":
//         console.log("Nine");
//         break;
//     default:    
//         console.log("Not a digit");
//  }
////****Task5.Input a letter and check it is vowel or consonent using switch..***////

// var letter = prompt("Enter any digit : ");
// letter = letter.toLowerCase();
// switch(letter){
//     case "a":
//         console.log("vowel");
//    break;
//     case "e":
//         console.log("vowel");
//    break;
//     case "i":
//         console.log("vowel");
//    break;
//     case "o":
//         console.log("vowel");
//    break;
//     case "u":
//    console.log("vowel");
//    break;

//    default:
//     console.log("Consonent");
// }
///***How to use for loop in javascript (part-1)***/
// for (var x = 2; x<100; x = x+2 ){
//     document.write("" + x );
// }
// document.write("<h1>End</h1>")//
/////***How to use for loop in javascript (part-2)///
////1 thaka 5 porjonto jok korta hoba// 1+2+3+4+5=?////
// var sum = 0;
// for (var x = 5; x <= 50; x = x + 1){
//     sum = sum + x;
// }    
// document.write(sum);

/////*** How to use while loop in javascript/////
// var x =1;
// while (x<=10){
// document.write( "" + x);
// x = x + 1
// }
////****joor sonka bar korar//////

// var x =2;
// var sum = 0;

//  while (x <= 100){
//     sum =sum + x;
//     x = x + 2;
//  }
//  document.write( sum);
//  document.write("<h1>end</h1>");

////***Task6. Write a program that will print sum of all
// the numbers that ar divisiable by 3 and 5 from (1-100).*///
// var x = 1;
// var sum = 0;
// while (x <= 100){
//   if(x % 3 == 0 && x % 5 == 0){
//    document.write(" " + x);
//       sum = sum + x;
//       }
//       x= x + 1;
//  }    
//  document.write(" " + sum);

////***How to use do-while loop in javascript///
// var i =1;

// do {
//     document.write("  "  +  i);
//     i++;  
// }while(i <= 20);
///////****How to use break and continue */
// for (var i = 1; i<=100; i++){
//     if(i == 10){
//         break;
//     }       
// document.write(" " + i);
// }
// document.write(" End");
////***how to use break and continue///
//  for (var i = 1; i<= 100; i++){
//      if (i == 10 ){
//      continue;
//      }
//      document.write(" " + i);
//  }
//  document.write(" end");

////////Jor sonka bar korar jonno ///
//  for (var i = 1; i<= 50; i++){
//        if (i%2 ==0  ){
//         continue;
//           }
//          document.write(" " + i);
// }
//  document.write(" end");

///****Ternary operator///


////////**** Traditional function*/
////creating a function..///
// function squere(num){ 
    
//     var result = num * num;
//     document.write("Result= " + result + "<br>");
// }
// ////calling a function.....///
// squere(2);
// squere(3);

// function squere(num1,num2){ 
    
//     var result = num1 * num2;
//     document.write("Result= " + result + "<br>");
// }
// ////calling a function.....///
// squere(2,6);
////////**** Traditional function*/
///creating a function 
// function squere(num1,num2){
//     var result = num1*num2;
//     return result; 
// }
// //calling afunction
// var x = squere(5,6);
// document.write(x);

////////**** Traditional function & operators*/
// /////add function.
// function addition(x,y){
//     var result = x + y;
//     document.write("Sum = " + result + "<br>");
// }
// function subtraction(x,y){
//     var result = x - y;
//     document.write("Sub = " + result + "<br>");
// }
// function multiplication(x,y){
//     var result = x * y;
//     document.write("Mul = " + result + "<br>");
// }  
// function arithmetic(a,x,y){
//     var result = (x + y)*a;
//     document.write("Ari = " + result + "<br>");
// }  
// function division(x,y){
//     var result = x / y;
//     document.write("Div = " + result + "<br>");
// } 
// function modulus(x,y){
//     var result = x % y;
//     document.write("Mod = " + result + "<br>");
// }
// function increment(x){
//     var result = x++ ;
//     document.write("Int = " + result + "<br>");
// }
// function decrement(x){
//     var result = --x ;
//     document.write("Dec = " + result + "<br>");
// }     
// addition(10,20);
// subtraction(580,60);
// multiplication(30,20);
// arithmetic(30,24,12);
// division(560,5);
// modulus(345,123);
// increment(34,12);
// decrement(50,20);

///// IIFEs and function expression//////** */
//function expressions//
// (function display(){
//     console.log("hello");
// })("hellow");
//Function Expressions
// function displayMessage(){
//     console.log("Hi i am message");
// }
// displayMessage();
//Function Expressions function k variable a rakha...
// var display2 = function displayMessage(){
//     console.log("Hi i am popy");
// };
// display2();

////**Task7. create an IIfes that print sum of 2 numbers//*/
// var x = parseFloat(prompt("Enter first number: "));
// var y = parseFloat(prompt("Enter second number: "));
// (function sum(){
// var sum = x+y;
// document.write("Sum of your value ="+ sum);
// })();
//////
// (function addition(a,b){
//   console.log(a+b);
// })(10,12);

////****How to create and use array***////
// var names = new Array(5);
// names[0] ="Anik";
// names[1] ="Popy";
// names[2] ="Riku";
// names[3] ="Vike";
// names[4] ="Mik";
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// ////////
// var names = ["Anik","Puja","Tiku","Piku","Mik"];
// console.log(names.length);
// console.log(names);
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

//////array push function ///
// var names = ["Anik","Puja","Tiku","Piku","Mik"];
// console.log(names.length);
// names.push("Mitu");
// console.log(names);
// console.log(names[5]);
// console.log(names.length);
////*****/ How to loop an Array*****///
// var num = [10,20,30,40,50];
// sum = 0;
// for(var i= 0; i<5; i++){

//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log("Sum = "+ sum);
////user ar kas thaka input neya array and loop////
// var num = new Array();
// for(var i= 0; i<5;i++){
//     num[i] = parseInt(prompt("Enter a number: "));
// }
// var sum = 0;
// for(var i= 0; i<5; i++){
//     console.log(num[i]);
//     sum = sum + num[i];
// }
// console.log("Sum = "+ sum);
////////******Array library methods*****////////
// var names = ["Popy","Mik","Rik","Piku","Chiku"];
// console.log(names); 
//shift opposite of pop//
// names.shift();
// console.log(names);
// //unshift opposite of push//
// names.unshift("Sagor");
// console.log(names);
/// adding elements using splice////
// names.splice(2,1,"Karim","Rahim");
// console.log(names);
/// removing elements using splice////
// names.splice(1,2);
// console.log(names);
///slice methode ar kaj////
// var newArray = names.slice(1);
// console.log(newArray)
//////Solt methode ar kaj /////
// var sortedNames = names.sort();
// console.log(sortedNames);
///reverse solt methode ar kaj///
// var sortedNames = names.sort();
// names.reverse();
// console.log(sortedNames);
////sort ar number methode ar kaj///
// var numbers =[20,5,25,45,1];
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers);
/////reverse sort method///
// var numbers =[20,5,25,45,1];
// numbers.sort(function(a,b){
//     return b-a;
// });
// console.log(numbers);

///// One dimensional array/// 

///Task.8 ///Create a function called highestScore that will.Reverse a 1d array 
//called scores return the highest score.thing requred .variable .If-ealse.loop . function.array.
// console.clear();
// function highestScore(score){
//     var max =score[0];
//     for(var x=0; x < score.length; x++){
//         if (max < scores[x]){
//            max = scores[x];
//         } 
//     }
//     return max;
// }
// var scores = [21,28,1,88,15];
// var maxScore = highestScore(scores);
// console.log(maxScore);
///// 2D / Two dimensional array/// 
////Task9. Create a function called highestRunScorer that will. Recive a 2d arra// 
//// called playersinfo.Based on highest score, return the name of the player.///
///Things required .variable .If-else.Loop.Array.Function.///
// function highestRunScorer(playersInfo){
//     var highestScorer = playersInfo[0][0];
//     var highestScorer = playersInfo[0][1];
//     for(var x = 1; x<playersInfo.length; x++){
//        if(highestScorer < playersInfo[x][1]){
//         highestScorer = playersInfo[x][1];
//         highestScorer = playersInfo[x][0];

//        }   
//     }
// return highestScorer;
// }
// var playersInfo = [
//     ["Ashraful",95],
//     ["Mizan",125],
//     ["Rakib",45],
//     ["Miku",105],
// ];
// var name = highestRunScorer(playersInfo);
// console.log(name);
//////***How to create and use object****//////
// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;

//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }
// }
// var student1 = new Student("Popy",23,3.45,["Bangla","Hindi","English"]);
// var student2 = new Student("Piku",23,3.45,["Bangla","China","English"]);
// var student3 = new Student("Mik",23,3.45,["Bangla","Saoskrito","English"]);

// student1.display();
// student2.display();
// student3.display();

////****** Math Object *****////
// var num1 = parseInt(prompt("Enter first number : "));
// var num2 = parseInt(prompt("Enter second number : "));

// var maximum = Math.max(num1,num2);
// console.log(maximum);

/////****Guessing Game*****//////
//Guessing Game//
// Guess a number from 1 to 5 ///
// Generate a randome number between 1 to 5///
//If the guess number matches randome number ; than show message won else lost/// 
//Run the game for 5 items///
//show the number of wons and losts///

// var numOfWon = 0;
// var numOfLost =0;
// for(var i= 1; i <= 5; i++){
//     var guessNumber = parseInt(prompt("Enter a number from 1 to 5 : "));
//     var randomNumber = Math.floor(Math.random()*5) + 1;
//     if(guessNumber==randomNumber){
//        console.log("You have won");
//        numOfWon++;
//     }else{
//         console.log("You have lost. Randome number was " + randomNumber);
//         numOfLost++;
//     }
// }
// document.write("Total Number of won = " + numOfWon + "<br>");
// document.write("Total Number of lost = " + numOfWon + "<br>");

  ////******Date object and date methods******////
///getElementById //
// document.getElementById("heading").innerHTML = "Hello";
