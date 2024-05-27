function calculateResult() {
    const inputMarks = document.getElementById('inputMarks').value;
    if (inputMarks) {
        const [score, totalScore] = inputMarks.split(',').map(Number);
        if (!isNaN(score) && !isNaN(totalScore) && totalScore > 0) {
            const percentage = (score / totalScore) * 100;
            let grade;
            let message = `Your percentage is: ${percentage.toFixed(2)}%\nYour grade is: `;

            if (percentage >= 90) {
                grade = 'A';
            } else if (percentage >= 80) {
                grade = 'B';
            } else if (percentage >= 70) {
                grade = 'C';
            } else if (percentage >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }

            message += `${grade}`;
            
            if (percentage >= 60) {
                message += '\nCongratulations! You are pass.';
            } else {
                message += '\nUnfortunately, you have failed.';
            }

            alert(message);
        } else {
            alert('Please enter valid numbers.');
        }
    } else {
        alert('Please enter your marks and total marks.');
    }
}