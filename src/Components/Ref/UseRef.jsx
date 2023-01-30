//store previous state with useRef

import {useEffect, useRef, useState} from "react";

const UseRefExample = () => {
    const [inputValue,setInputValue] = useState("");
    const previousValue = useRef();
    const [count,setCount] = useState(0);
    const previousCount = useRef();

    const changeHandler = (e) => {
        setInputValue(e.target.value);
    }

    const generateHandler = () => {
      setCount(Math.ceil(Math.random() * 100))
    }

    useEffect(()=>{
        previousValue.current = inputValue;
    },[inputValue]);

    useEffect(()=>{
        previousCount.current = count;
    },[count])

  return(
      <div>
          <input type="text" value={inputValue} onChange={changeHandler}/>
          <p>My name is {inputValue} and used to be {previousValue.current}</p>
          <div>
              <button onClick={generateHandler}>Generate Random</button>
              <p>Count is {count}</p>
              <p>Previous count is {previousCount.current}</p>
          </div>
      </div>
  )
}

export default UseRefExample;