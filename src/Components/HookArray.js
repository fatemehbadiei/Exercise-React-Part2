//آپدیت state از نوع object

import React, {useState} from "react";

const HookArray = () => {

    const [item, setItem] = useState([]);

    const addItemHandler = () => {
        // const addedItem = {
        //     id: item.length,
        //     number: Math.floor(Math.random() * 10)
        // }
        // // setItem([...item , addedItem]); //way 1
        //
        // const updateItem = [...item, addedItem];
        // setItem(updateItem); //way 2

        //way 3

        setItem([...item , {id : item.length , number : Math.floor(Math.random() * 10)}])


    }

    return (
        <div>
            <button onClick={addItemHandler}>Add Item</button>
            {item.map((item) => {
                return <li key={item.id}>The number is {item.number}</li>
            })}
        </div>
    )
}

export default HookArray;