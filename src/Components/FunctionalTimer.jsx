import {useEffect, useState} from "react";

const FunctionalTimer = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("Hi");
            setCount(count + 1);
        },1000)
        return ()=>{
            clearInterval(interval);
        }
    })

    return (
        <>
            <div>Functional Interval</div>
            <button>{count}</button>
        </>
    )
}

export default FunctionalTimer;