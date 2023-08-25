import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddInput() {
    const [data,setData] = useState([''])
    console.log("data' " + data)
    const navigate = useNavigate();

    const handleAddInput=()=>{
        setData([...data, ''])
    }

    const handleInputChange=(e,i)=>{
        const dataCopy = [...data]
        dataCopy[i] = e.target.value
        setData(dataCopy)
    }
    
    const handleDeleteInput=(i)=>{
        const dataCopy = [...data]
        console.log("data' " + data + " | dataCopy' " + dataCopy)
        dataCopy.splice(i,1)
        console.log("data' " + data + " | dataCopy' " + dataCopy)
        setData(dataCopy)
    }

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
            {
                data.map((val, i)=>
                <div key={i}>
                    <input className = "addInput"  value = {val} onChange={(e)=>handleInputChange(e,i)} />
                    { i != 0 && <button className = "deleteInput" type="button" onClick={()=>handleDeleteInput(i)}>Delete</button> }
                </div>
                )
            }
            <button className = "addEdit" type="button" onClick={handleAddInput}>Add Input</button>
            <br></br>
            <button className="addButton">Add ToDo</button>
            </form>
        </div>
    )
}

export default AddInput;