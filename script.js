function resultant(expression){
    let expressionElements = output.value.split("");
    console.log(expressionElements);
    let result;
    for (let i = 0; i < expressionElements.length; i++) {
        const element = expressionElements[i];
        if (element == "(" && i > 0) {
            if (expressionElements[i-1] == "+" || expressionElements[i-1] == "-" || expressionElements[i-1] == "*" || expressionElements[i-1] == "/" || expressionElements[i-3] == "s" || expressionElements[i-3] == "t" || expressionElements[i-3] == "c"){
                continue;            
            }
            else{
                expressionElements[i] = "*(";
            }
        }
        if (element == ")" && i < expressionElements.length - 1) {
            if (expressionElements[i+1] == "+" || expressionElements[i+1] == "-" || expressionElements[i+1] == "*" || expressionElements[i+1] == "/" || expressionElements[i+1] == ")"){
                continue;
            }
            else{
                expressionElements[i] = ")*";
            }
        }
    }

    if (checkBox.checked) {
         some = expressionElements.join("").replace(/sin\(/g, "Math.sin((Math.PI/180)*").replace(/cos\(/g, "Math.cos((Math.PI/180)*").replace(/tan\(/g, "Math.tan((Math.PI/180)*").replace(/π/g, "Math.PI").replace(/e/g, "Math.E")
    }
    else{
         some = expressionElements.join("").replace(/sin/g, "Math.sin").replace(/cos/g, "Math.cos").replace(/tan/g, "Math.tan").replace(/π/g, "Math.PI").replace(/e/g, "Math.E")
    }

   
    console.log(some);
    result = eval(some)
    output.value = result;
}

