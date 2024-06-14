var marks = prompt("Please Enter your Marks");

if (marks >= 90) {
    console.log("your grade is A+");
    
} else if (marks <= 89 && marks >= 85) {
    console.log("Your Grade is A");
    
} else if (marks <= 84 && marks >= 80) {
    console.log("Your Grade is A−");

} else {
    console.log("You are Fail");
}