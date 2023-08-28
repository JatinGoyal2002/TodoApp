import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function MultilineTextBox({val, onChange}) {
    // const [data,setData] = useState([''])
    // console.log("data' " + data)
    console.log("in mutiline component")
    const navigate = useNavigate();
    
    const handleDeleteInput=(i)=>{
        const dataCopy = [...val]
        // console.log("data' " + data + " | dataCopy' " + dataCopy)
        dataCopy.splice(i,1)
        // console.log("data' " + data + " | dataCopy' " + dataCopy)
        onChange(dataCopy)
    }

    const handleAddInput=()=>{
        onChange([...val, ''])
    }

    const handleInputChange=(e,i)=>{
        const dataCopy = [...val]
        dataCopy[i] = e.target.value
        onChange(dataCopy)
    }

    return(
        <div className="App">
            {
                val.map((v, i)=>
                <div key={i}>
                    <input className = "addInput"  value = {v} onChange={(e)=>handleInputChange(e,i)} />
                    { i != 0 && <button className = "deleteInput" type="button" onClick={()=>handleDeleteInput(i)}>Delete</button> }
                </div>
                )
            }
            <button className = "addEdit" type="button" onClick={handleAddInput}>Add Input</button>
        </div>
    )
}

export default MultilineTextBox;