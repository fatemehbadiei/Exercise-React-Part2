//آپدیت state با استفاده از callback
import React, {useState} from "react";

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const addOneHandler = () => {
        // setCount(count + 1);
        setCount((prevCount)=> prevCount + 1);
    }

    const addTwoHandler = () => {
        // setCount(count + 2);
        setCount((prevCount)=> prevCount + 2);
    }

    const addFiveHandler = () => {
        // setCount(count + 5);
        for (let i = 0 ; i < 5 ; i++){
            setCount((prevCount)=> prevCount + 1);
        }
    }

    return (
        <div>
            <h2>Count-{count}</h2>
            <button onClick={addOneHandler}>Add One</button>
            <button onClick={addTwoHandler}>Add Two</button>
            <button onClick={addFiveHandler}>Add Five</button>
        </div>
    )
}

export default HookCounter;