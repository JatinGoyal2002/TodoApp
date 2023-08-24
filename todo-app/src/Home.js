import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import AddItem from './AddItem'; 


function Home(){

    const [items, setItems] = useState(null);

    const url = "http://localhost:8000/item/"

    useEffect(() => {
        fetch(url)
        .then(res => {
            return res.json();})
        .then(data => 
            {
                setItems(data);
            })
        .catch(error => {
            console.log("error is: " + error)
        })
    }, [url]);

    return (
        <>
        <AddItem />
        { items && <ItemList data={items} /> }
        </>
    )
}

export default Home;