'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

//  todo
for (let b = 0; b < studentNames.length; b++) {
    console.log(`${b} - ${studentNames[b]}: ${studentScores[b]}`);
}

console.log('\nPART B: ADD NEW STUDENTS');

// TODO: Add Faith and 88 at the end.
studentNames.push(`Faith`);
studentScores.push(88);

// TODO: Add Aaron and 76 at the beginning.
studentNames.unshift(`Aaron`);
studentScores.unshift(76);

// TODO: Display both arrays and their length.
console.log(`Updated Names: `, studentNames);
console.log(`Updated Scores: `, studentScores);
console.log(`Numbers of  students: `, studentNames.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// TODO: Remove the first name and score.
studentNames.shift();
studentScores.shift();

// TODO: Remove the last name and score.
studentNames.pop();
studentScores.pop();

// TODO: Find Daniel's index.
const DanielInx = studentNames.indexOf(`Daniel`);

// TODO: Remove Daniel and Daniel's score.
studentNames.splice(DanielInx, 1);
studentScores.splice(DanielInx,1);

// TODO: Insert Grace and 82 at index 2.
studentNames.splice(2, 0, `Grace`);
studentScores.splice(2, 0, 82);

// TODO: Display the updated arrays.
console.log(`Names: `, studentNames);
console.log(`Scores: `, studentScores );

console.log('\nPART D: CLASS STATISTICS');

// TODO: Calculate the total score.
const totalOfScor = studentScores.reduce((sum, score) => sum + score, 0);

// TODO: Calculate the average score.
const ScoreAver = totalOfScor / studentScores.length;

// TODO: Find the highest score.
let highestSco = studentScores[0];

// TODO: Find the lowest score.
let lowestSco = studentScores[0];
for (let a = 1; a < studentScores.length; a++) {
    if (studentScores[a] > highestSco) highestSco = studentScores[a];
    if (studentScores[a] < lowestSco) lowestSco = studentScores[a];
}

// TODO: Display all statistics.
console.log(`Total Score:`, totalOfScor);
console.log(`Average Score:`, ScoreAver.toFixed(2));
console.log(`Highest Score:`, highestSco);
console.log(`Lowest Score:`, lowestSco);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;
// TODO: Use filter to obtain passing scores.
const passingSco = studentScores.filter((score) => score >= passingScore);

// TODO: Use map to produce Passed or Failed statuses.
const statuse = studentScores.map((score) => score >= passingScore ? `Passed` : `Failed`);

// TODO: Use some to check whether at least one student failed.
const leastOneFAIL = studentScores.some((score) => score < passingScore);

// TODO: Use every to check whether all students passed.
const Passed = studentScores.every((score) => score >= passingScore);

// TODO: Display all results.
console.log(`Passing Scores: `, passingSco);
console.log(`Statuses: `, statuse);
console.log(`At least One Failed: `, leastOneFAIL);
console.log(`All Students  Passed: `, Passed);

console.log('\nPART F: SORT AND SEARCH');

// TODO: Copy the scores using Array.from.
const copyofScores = Array.from(studentScores);

// TODO: Sort the copy from highest to lowest.
copyofScores.sort((a, b) => b - a);

// TODO: Search for 91 using includes and indexOf.
const NinetyOne = copyofScores.includes(91);

const IndexofNinetyone = studentScores.indexOf(91);

// TODO: Display the results.
console.log(`Scores from Highest to lowest: `, copyofScores);
console.log(`Contains 91: `, NinetyOne);
console.log(`index of 91: `, IndexofNinetyone);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');



// TODO: Use nested loops to process every row and column.
// TODO: Calculate and store each student's activity average.
const actiAve = [];
for (let r = 0; r < activityScores.length; r++) {
    let Totrow = 0;
    for (let c = 0; c < activityScores[r].length; c++) {
       
        Totrow += activityScores[r][c];
    }
    const AveRow = Totrow / activityScores[r].length;
    actiAve.push(AveRow);
    console.log(`${originalNames[r]}'s activity average: ${AveRow.toFixed(2)}`);
}
// TODO: Display activityAverages.
console.log(`Activity Averages:`, actiAve);

console.log('\nPART H: TEXT SUMMARY');

// TODO: Use join to display names separated by " | ".
console.log(`Students:`, studentNames.join(` | `));