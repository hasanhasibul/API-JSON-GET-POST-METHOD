function Grading(score) {
    let grade;
  
    switch(true) {
      case (score <= 100 && score >= 90):
        grade = 'A+';
          break;
      case (score <= 89 && score >= 80):
        grade = 'A';
           break;
      case (score <= 79 && score >= 70):
        grade = 'C';
           break;
         case (score <= 69 && score >= 60):
            grade = 'D';
           break;
      case (score <= 59 && score >= 50):
        grade = 'D-';
          break;
     case (score <= 49 && score >= 33):
            grade = 'E';
              break;
        
      case (score > 100 && score < 0):
        grade = 'INVALID SCORE';
          break; 
  
       case (score <= 32 && score >= 0):
        grade = 'F';
          break; 
  
      default:
        return 'INVALID SCORE';
  }
  
    return grade;
  }

  const result = Grading(3);
  console.log(result);