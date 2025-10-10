import react from "react";

function Performoperation({num1,num2,operation}){
    const calculate=()=>{
        switch(operation){
            case "add":return num1+num2;
            case "sub":return num1-num2;
            case "mult":return num1*num2;
            case "div":return (num2!==0? num1/num2 :"cant divide by zero");
        }};


        return(
            <div>
             <h3>Calculator by using all fields from user</h3>
             <h2> {operation.toUpperCase ()}   : {calculate()}</h2>
             
             </div>
        );
    
}
export default Performoperation;