// function for getting result 
function estimate(){

    // using split for spliting the expression

    let estimateElements = output.value.split(""); 
    console.log(estimateElements);

    // loop for fetching the expression element one by one


    let result;
    for (let i = 0; i < estimateElements.length; i++) {
        const element = estimateElements[i];


        // using if else for checking the value before (


        if (element == "(" && i > 0) {   
            if (
              estimateElements[i-1] == "+" || 
              estimateElements[i-1] == "-" ||
              estimateElements[i-1] == "*" ||
              estimateElements[i-1] == "/" ||
              estimateElements[i-1] == "(" || 
              estimateElements[i-1] == "*(" ||
              estimateElements[i-3] == "s" || 
              estimateElements[i-3] == "t" ||
              estimateElements[i-3] == "c" || 
              estimateElements[i-3] == "*s" ||
              estimateElements[i-3] == "*c" || 
              estimateElements[i-3] == "*t"
              ){
                continue;            
            }
            else{
                estimateElements[i] = "*(";
            }
        }

        //using if else for checking the value after )

        if (element == ")" && i < estimateElements.length - 1) {
            if (
                estimateElements[i+1]== "+" || 
                estimateElements[i+1] == "-" || 
                estimateElements[i+1] == "*" ||
                estimateElements[i+1] == "/" || 
                estimateElements[i+1] == ")" ||
                estimateElements[i+1] == "("
               ){
                continue;
            }
            else{
                estimateElements[i] = ")*";
            }
        }
    // using if else for checking the value before sin,cos,tan

    if ((element == "s" ||  element == "c" || element == "t") && i > 0) {
        if (
            estimateElements[i-1] == "+"||
            estimateElements[i-1] == "-" ||
            estimateElements[i-1] == "*" ||
            estimateElements[i-1] == "/" ||
            estimateElements[i-1] == "(" ||
            estimateElements[i-1] == "*("
           ){
            continue;
        }
        else{
            if (element == "s" && estimateElements[i-1] != "o" && estimateElements[i-2] != "r")  {
                estimateElements[i] = "*s";
            }
            else if (element == "c"){
                estimateElements[i] = "*c";
            }
            else if (element == "t"){
                estimateElements[i] = "*t";
            }
        }
    }
    
}
         console.log(estimateElements);

         //using if else for degree and radian conversion
        
        // for degree conversion 

    if (degreeBox.checked) {

        // join uesd for joining expression

         answer = estimateElements.join("") 

         // using regex for identifying and replacing with method 

         .replace(/sin\(/g, "Math.sin((Math.PI/180)*") 
         .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
         .replace(/tan\(/g, "Math.tan((Math.PI/180)*")
         .replace(/π/g, "Math.PI")
         .replace(/reMath.sin\(\(Math.PI\/180\)\*/g, "resin(");
    }

       // for radian conversion 

    else{

        // join uesd for joining expression

         answer = estimateElements.join("")

         // using regex for identifying and replacing with method

         .replace(/sin/g, "Math.sin")
         .replace(/cos/g, "Math.cos")
         .replace(/tan/g, "Math.tan")
         .replace(/π/g, "3.14159")
         .replace(/reMath.sin/g, "resin");
    } 
 
     // using try catch for error handling 

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

