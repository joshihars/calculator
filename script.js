function estimate(){
    let expressionElements = output.value.split("");
    console.log(expressionElements);
    let result;
    for (let i = 0; i < expressionElements.length; i++) {
        const element = expressionElements[i];
        if (element == "(" && i > 0) {
            if (
              expressionElements[i-1] == "+" || 
              expressionElements[i-1] == "-" ||
              expressionElements[i-1] == "*" ||
              expressionElements[i-1] == "/" ||
              expressionElements[i-1] == "(" || 
              expressionElements[i-1] == "*(" ||
              expressionElements[i-3] == "s" || 
              expressionElements[i-3] == "t" ||
              expressionElements[i-3] == "c" || 
              expressionElements[i-3] == "*s" ||
              expressionElements[i-3] == "*c" || 
              expressionElements[i-3] == "*t"
              ){
                continue;            
            }
            else{
                expressionElements[i] = "*(";
            }
        }
        if (element == ")" && i < expressionElements.length - 1) {
            if (
               expressionElements[i+1]== "+" || 
               expressionElements[i+1] == "-" || 
               expressionElements[i+1] == "*" ||
               expressionElements[i+1] == "/" || 
               expressionElements[i+1] == ")"
               ){
                continue;
            }
            else{
                expressionElements[i] = ")*";
            }
        }
    

    if ((element == "s" ||  element == "c" || element == "t") && i > 0) {
        if (
           expressionElements[i-1] == "+"||
           expressionElements[i-1] == "-" ||
           expressionElements[i-1] == "*" ||
           expressionElements[i-1] == "/" ||
           expressionElements[i-1] == "(" ||
           expressionElements[i-1] == "*("
           ){
            continue;
        }
        else{
            if (element == "s" && expressionElements[i-1] != "o" && expressionElements[i-2] != "r")  {
                expressionElements[i] = "*s";
            }
            else if (element == "c"){
                expressionElements[i] = "*c";
            }
            else if (element == "t"){
                expressionElements[i] = "*t";
            }
        }
    }
    
}
         console.log(expressionElements);

    if (degreeBox.checked) {
         answer = expressionElements.join("")
         .replace(/sin\(/g, "Math.sin((Math.PI/180)*")
         .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
         .replace(/tan\(/g, "Math.tan((Math.PI/180)*")
         .replace(/π/g, "Math.PI")
         .replace(/reMath.sin\(\(Math.PI\/180\)\*/g, "resin(");
    }
    else{
         answer = expressionElements.join("")
         .replace(/sin/g, "Math.sin")
         .replace(/cos/g, "Math.cos")
         .replace(/tan/g, "Math.tan")
         .replace(/π/g, "3.14159")
         .replace(/reMath.sin/g, "resin");
    }

   
    //console.log(some);
    try{
        result = eval(answer)
        output.value = result.toFixed(5); 
    }
    catch(error){
       output.value="Error";
    }
}
 
// function for getting resin value

function resin(value){
    return value * 392.9;
}

