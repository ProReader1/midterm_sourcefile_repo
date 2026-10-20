let ScoresofStu = [85, 72, 91, 64, 78];



function gotRemark (score) {   
if (score >= 90) {
     return "Excellent";
    }
else if (score >=80) { 
    return "very good";
}
else if (score >= 75) { 
    return "Good";
}
else {
    return "Failed";
}
    }

    function gotStatus(score) {
if (score < 75) {
    return "Failed";
}
else {
    return "Passed";
}
    }

    console.log(`Student Scores: `)
  ScoresofStu.forEach((score) => {
    console.log(score);
  });

console.log("");  
    
  let total = 0;
  let passed = 0;
  let failed = 0;
  let highest = ScoresofStu [0];
  let lowest = ScoresofStu [0];

ScoresofStu.forEach( (score, index) => {
let remark = gotRemark(score);
let status = gotStatus(score);

console.log(`Student ${index + 1}: ${score} - ${remark} - ${status}`);

total += score;

if (status === "Passed") {
    passed++;
}
else {
    failed++;
    }

    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
});

const average = total / ScoresofStu.length;

console.log("");
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);


