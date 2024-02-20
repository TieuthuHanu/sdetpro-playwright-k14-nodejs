/**
 Student: {name: String, grades: Array[number]}
 Given 3 students -> find the best one is the one has highest score
 More than 1 person has same score -> print all
 */

let ti = {
    name: "Ti",
    grades: [9, 8, 6] // 7.6
}

let teo = JSON.parse(JSON.stringify(ti));
teo.name = "Teo";
teo.grades = [7, 9, 9]; // 8.3

let tun = JSON.parse(JSON.stringify(ti));
tun.name = "Tun";
tun.grades = [6, 7, 8]; // 7.0

const students = [ti, teo, tun];
const bestStudent = findBestStudent(students);
console.log("The best student is:", bestStudent);

function findBestStudent(students) {
    let currentHighestScore = 0;
    let bestStudent = undefined;
    for (const student of students) {
        const averageScore = calculateAvgScore(student);
        if (averageScore >= currentHighestScore) {
            bestStudent = student;
            currentHighestScore = averageScore;
        }
    }
    return bestStudent;
}

function calculateAvgScore(student) {
    const studentGrades = student.grades;
    let totalGrade = 0;
    let scoreLength = studentGrades.length;
    for (const score of studentGrades) {
        totalGrade += score;
    }
    return Math.floor(totalGrade / scoreLength);
}