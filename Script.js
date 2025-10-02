
  function calculate() {
    let studentName = document.getElementById("student").value;
    let assignment1 = parseFloat(document.getElementById("assignment1").value) || 0;
    let assignment2 = parseFloat(document.getElementById("assignment2").value) || 0;
    let finalExam = parseFloat(document.getElementById("Exam").value) || 0;

    // Average of assignments
    let assignmentAverage = (assignment1 + assignment2) / 2;

    // Final grade (40% assignments, 60% exam)
    let finalGrade = (assignmentAverage * 0.4) + (finalExam * 0.6);
    console.log("finalGrade",finalGrade)

    let resultText = `Student: ${studentName}<br>Final Grade: ${finalGrade.toFixed(2)}<br>`;

    if (finalGrade >= 70) {
      console.log ("You Passed");
    } else {
      console.log ("You Failed and you will repeat this class>");
    }

    console.log(finalExam >= 70)

    if (finalGrade >= 90) {
      console.log ("Performance: Excellent");
    }

    document.getElementById("result").innerHTML = resultText;
  }

  
    
   
    
    
   

    

   

   
