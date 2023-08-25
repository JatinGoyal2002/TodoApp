import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ItemList = ({data}) => {
    const navigate = useNavigate();

    const handleDelete = (item) => {
        fetch("http://localhost:8000/item/" + item.id, {
            method : "DELETE"
        }).then(() => {
            console.log("Deleted");
            navigate(0);
        })
    }


    function handleEdit(id, name) {  
        var name = prompt("Enter new Todo", name);  
        
        const todo = {name};
        console.log("todo " + todo);

        fetch('http://localhost:8000/item/' + id, {
            method : 'PATCH',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(todo)

        }).then( () => {
            navigate(0);
        })
        }  

    return (
        <ol>
        {data.map(item => (
        <div className="allItems" key={item.id} >
            <li className='itemName'>{ item.name }</li>
            <button className = "deleteClass" onClick={() => handleDelete(item)}>Delete</button>
            <form className='editForm'>  
                <input className = "editClass" type = "button" value = "Edit" onClick = {() => handleEdit(item.id, item.name)} />  
            </form>  
        </div>
        
      ))
      }
        </ol>
    )
}

export default ItemList;