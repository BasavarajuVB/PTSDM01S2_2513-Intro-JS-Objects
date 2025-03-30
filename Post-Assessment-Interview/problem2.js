// Problem-2

// Student Exam Analysis
// Background:
// A school maintains students' scores from recent exams. Each student has scores in Math, Science, and English, ranging from 0 to 100.

// You will analyze this data using JavaScript objects.

// Tasks:
// Determine Pass or Fail:

// A student passes if they score 40 or above in all three subjects.

// Otherwise, they fail.

// Count Passing and Failing Students:

// Calculate how many students passed and how many failed.
// Calculate Scholarship Amount:

// Each passing student gets a scholarship of ₹5000.

// Calculate the total scholarship amount.

const studentData = [

{ name: "Aryan", math: 60, science: 50, english: 70 },

{ name: "Ishita", math: 30, science: 40, english: 35 },

{ name: "Rahul", math: 80, science: 85, english: 78 },

{ name: "Pooja", math: 55, science: 60, english: 58 },

{ name: "Krishna", math: 20, science: 30, english: 25 },

{ name: "Ananya", math: 90, science: 95, english: 92 },

{ name: "Raj", math: 35, science: 45, english: 50 },

{ name: "Simran", math: 60, science: 62, english: 61 },

{ name: "Manoj", math: 70, science: 75, english: 72 },

{ name: "Priya", math: 40, science: 42, english: 39 },

];

const SCHOLARSHIP_AMOUNT = 1500;

let passedCount = 0
let failedCount = 0 
let totalScholarshipAmount = 0 

for(let i =0; i<studentData.length; i++){
    if(studentData[i].math >= 40 && studentData[i].science >= 40 && studentData[i].english >= 40){
        passedCount++
        totalScholarshipAmount += SCHOLARSHIP_AMOUNT
    }else{
        failedCount++
    }
}

console.log(`Number of student passed: ${passedCount}`)
console.log(`Number of student failed: ${failedCount}`)
console.log(`Total scholarship amount: ${totalScholarshipAmount}`)