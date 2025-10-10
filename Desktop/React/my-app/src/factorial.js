import React from "react";

function Factorial({number})
{
   const getfact=(n)=>{
    if(n<0) return " Invalid";
    let result=1;

    for(let i=2;i<=n;i++)
        result*=i;
    return result;

   }

   return(
    <div>
        <h3>Factorial of {number} is {getfact(number)}</h3>
    </div>

   );
}
export default Factorial;