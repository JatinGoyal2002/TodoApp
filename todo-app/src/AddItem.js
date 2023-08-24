import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddItem(){

    const [name, setName] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {name};
        // console.log("stringify " + JSON.stringify(todo) + " " + name);

        fetch('http://localhost:8000/item/', {
            method : 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)

        }).then(() => { navigate(0); })
    }

    return (
        <>
        <div className="addForm">
        <form onSubmit={handleSubmit}>
            <input className = "addInput" type="text" required  value={name} onChange={(e) => setName(e.target.value)} />
            <button className="addButton">Add ToDo</button>
        </form>
        </div>
        </>
    )
}

export default AddItem;