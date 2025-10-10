import React from "react";

function Displaydata()
{
    const Students=[
        {id:1,name:"Rajan",marks:80},
        {id:2,name:"Rajani",marks:85},
        {id:3,name:"Rajanikant",marks:90},
    ];

    return(

        <div id="data">
        <h2>Student Information</h2>
          {Students.map(student => (
          <li key={student.id}>
            {student.name} 
            {student.marks}
          </li>
        ))}
        </div>
    );
}

export default Displaydata;