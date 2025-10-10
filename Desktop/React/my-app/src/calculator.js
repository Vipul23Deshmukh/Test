import React from "react";

function Calculator({num1,num2}){
    return(

        <div>
        <h2>Calculator using React.js</h2>
        <p> Addition: { num1+num2 }</p>
        <p> Subtraction: { num1-num2 }</p>
        <p> Multiplication: { num1*num2 }</p>
        <p> Division: {num2!==0 ? (num1/num2):"cant divide by zero" }</p>

        </div>
    );
}

export default Calculator;