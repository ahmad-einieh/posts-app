import React from "react";
import { useState } from "react";

const About = () => {

let name = "Ali";
let [fullName , setFullName] = useState("Ali");
let [age , setAge] = useState(21);

let [student, setStudent] = useState({'name':'Ali' , 'age':21});


const changeName = () => {
name = "Ahmad";
setFullName("Ahmad");
setStudent({'name':'Ahmad' , 'age':22});
setAge(22);
}

return (
    <div className="container"> 
        <br/>
        <br/>
        <br/>
    <h1>About Page</h1>
    <h4>{name}</h4>
    <h4>{fullName}</h4>
    <h4>{age}</h4>
    <p>{student.name}</p>
    <p>{student.age}</p>
    <br/>
    <button className="btn btn-primary" type="button" onClick={ changeName}>Click Me</button>
    </div>
);
}

export default About;