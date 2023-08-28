import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MultilineTextBox from "./MultilineTextBox";

function MultipleInput() {
    const [data,setData] = useState([''])
    console.log("data' " + data)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log("this funcion is called")
        e.preventDefault();

        data.map((name, i) =>{
            console.log("name, " + name + " i, " + i)
            const todo = {name};
            console.log("todod, " + todo + " " + JSON.stringify(todo))
            fetch('http://localhost:8000/item/', {
                method : 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(todo)

            }).then(() => { 
                console.log("Data posted") })
        })
        navigate(0);
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <MultilineTextBox val = {data} onChange = {setData}/>
            <button className="addButton">Add ToDo</button>
            </form>
        </div>
    )
}

export default MultipleInput;