let examScore = 25

if(examScore >= 70 && examScore <= 100 ){
    console.log ("A");
}else if (examScore >= 60  && examScore <= 69){
    console.log ("B");
}else if (examScore >= 50 && examScore <= 59){
    console.log ("C");
}else if (examScore >= 40 && examScore <= 49){
    console.log("D");
}else if (examScore >= 30 && examScore <= 39){
    console.log("E");
}else if (examScore >= 0 && examScore <= 29 ){
    console.log("F");
}else {
    console.log("Invalid Exam Score");
}