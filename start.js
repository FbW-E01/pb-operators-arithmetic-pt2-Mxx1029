// **Basic Arithmetic Problems**

// Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many tickets were sold? 

const ticketsSold = 6450;
const ticketPrice = 15;
console.log(`Q1: The theatre made ${ticketsSold * ticketPrice} $ that night.` );

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?

const weeklySalary = 500;
console.log(`Q2: Sylvia makes ${(weeklySalary * 4) * 12} $ per year.`);

// **Percentage**

// Q3. Calculate the percentage of 17/30. Expected output: number%

console.log(`Q3: The percentage of 17/30 is ${((17 / 30) * 100).toFixed(2)}%.`);

// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.

const sideSquare = 4.75;
console.log(`Q4: The perimeter of the square is ${sideSquare * 4} cm.`);


// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

const side1Triangle = 5;
const side2Triangle = 6;
const side3Triangle = 7;
console.log(`Q5: The perimeter of the triangle is ${side1Triangle + side2Triangle + side3Triangle} cm.`);

// Q6. Calculate the area of a square. Each side is 5cm.

const anotherSideSquare = 5;
console.log(`Q6: The area of the square is ${anotherSideSquare * anotherSideSquare} cm².`);

// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

const halfPerimeterTriangle = (side1Triangle + side2Triangle + side3Triangle) / 2;
console.log(`Q7: The area of the triangle is ${Math.sqrt(halfPerimeterTriangle * (halfPerimeterTriangle - side1Triangle) * (halfPerimeterTriangle - side2Triangle) * (halfPerimeterTriangle - side3Triangle))} cm².`);

// Q8. Calculate the volume of a cube. Length of each side is 9cm.

const sideCube = 9;
console.log(`Q8: The volume of the cube is ${sideCube * sideCube * sideCube} cm3.`);

// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip
const bill1 = (22.35 * 10 / 100) + 22.35;
const bill2 = (26.67 * 15 / 100) + 26.67;
const bill3 = (35.92 * 20 / 100) + 35.92;
console.log(`Q9: The first bill is ${bill1.toFixed(2)} € including 10% tip, the second bill is ${bill2.toFixed(2)} € including 15% tip, and the third bill is ${bill3.toFixed(2)} € including 20% tip.`);

// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?

const sumHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
console.log(`Q10: Noemi worked on average ${sumHours / 10} hours per day in the last two weeks.`);


// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

const sumOfFiveTestScores = 75 + 70 + 85 + 90 + 100;
console.log(`Q11: In the sixth test the student got a score of: ${85 * 6 - sumOfFiveTestScores}.`);


// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.

const productOfNineTestScores = 80 * 9;
const productOfEightTestScores = 78 * 8;
console.log(`Q12: James needs a minimum of ${productOfNineTestScores - productOfEightTestScores}% to get an 80% average.`);


