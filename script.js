const students = [
    {
        name: 'João',
        first_test_score: 10,
        second_test_score: 2
    },
    {
        name: 'Joseph',
        first_test_score: 5,
        second_test_score: 6
    },
    {
        name: 'July',
        first_test_score: 8,
        second_test_score: 8
    },
    {
        name: 'Alex',
        first_test_score: 3,
        second_test_score: 4
    }
    
]

function calculateAverageScore() {
    let totalScore = 0;
    
    for (const score of students) {
        totalScore += score.first_test_score + score.second_test_score;
    }
    
    const averageScore = totalScore / students.length;
    
    return averageScore
}

averageScore = calculateAverageScore();

function showScores() {
    let i = 1;
    let show
    for (const student of students) {
        let studentScore = student.first_test_score + student.second_test_score;
        
        if(studentScore > averageScore){
            show = alert(`
            Student ${i}'s, congratulations! You have been aproved.
            
            name: ${student.name}
            average: ${averageScore}
            score: ${studentScore}   
            `)
        }else {
            show = alert(`
            Student ${i}'s, Sorry. You failed.

            name: ${student.name}
            average: ${averageScore}
            score: ${studentScore}
            `)  
        }
        
        i++
    }

    return show;
}

showScores();






i++
studentScore = student.first_test_score + student.second_test_score;




alert(averageScore);