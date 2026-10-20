class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
        Average(){
            let total = 0;
            for(let i = 0; i < this.score.length; i++){
                total += this.score[i];
            }
        return total / this.score.length;
        }
    
        getlettGrade(){
            const aveg = this.Average();

            if (aveg >= 90) {
                return "A";
            }
            else if (aveg >= 80) {
                return "B";
            }
            else if (aveg >= 70){
                return "C";
            }
            else if (aveg >= 60){
                return "D";
            }
            else {
                return "F";
            }
        }
}

function analyzeClass(students) {
    console.log(`-------STUDENT REPORT------`);

    let totClass = 0;
    let topStu = students[0];

    for (let i = 0; i < students.length; i++){
        const student = students[i];
        const aveg = student.Average();
        const grade = student.getlettGrade();

        console.log(`${student.name} - Average:  ${aveg.toFixed(1)} | Grade: ${grade}`);
    
    totClass += aveg;

    if (aveg > topStu.Average()){
        topStu = student;
    }
    }

    const classAve = totClass /students.length;

    console.log(`---------------------------`);
    console.log(`Class Average: ${classAve.toFixed(1)}`);
    console.log(`Top Student: ${topStu.name} with ${topStu.Average().toFixed(1)}`);

    
}

const DataofStu = [
    {name: "Lany", score: [85, 90, 92]},
    {name: "Bongbung", score: [70, 75, 68]},
    {name: "Dutherthe", score: [95, 98, 92]},
    {name: "Pico", score: [55,60,58]}
];

const students = DataofStu.map(s => new Student (s.name, s.score));
analyzeClass(students);