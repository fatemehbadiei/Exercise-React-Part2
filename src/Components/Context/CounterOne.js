//an example of context

// import {useContext} from "react";
// import {counterContext, counterContextDispatcher} from "./CounterProvider";
//
// const CounterOne = () => {
//
//   const count = useContext(counterContext);
//   const setCount = useContext(counterContextDispatcher);
//
//   return(
//       <>
//         <h2>Count is -{count}</h2>
//         <button onClick={()=>setCount(count + 1)}>Add One</button>
//       </>
//   )
// }
//
// export default CounterOne;


//custom hook for context

// import {useCount, useCountActions} from "./CounterProvider";
//
// const CounterOne = () => {
//
//     const count = useCount();
//     const setCount = useCountActions();
//
//   return(
//       <>
//         <h2>Count is -{count}</h2>
//         <button onClick={()=>setCount(count + 1)}>Add One</button>
//       </>
//   )
// }
//
// export default CounterOne;


//مدیریت اکشن ها به روش بهتر

// import {useCount, useCountActions} from "./CounterProvider";
//
// const CounterOne = () => {
//
//     const count = useCount();
//     const {addOne,addFive,decrement} = useCountActions();
//
//     return(
//         <>
//             <h2>Count is -{count}</h2>
//             <button onClick={addOne}>Add One</button>
//             <button onClick={addFive}>Add Five</button>
//             <button onClick={decrement}>decrement</button>
//         </>
//     )
// }
//
// export default CounterOne;


//useContext and useReducer

import {useCount, useCountAction} from "./CounterProvider";

const CounterOne = () => {
    const count = useCount();
    const dispatch = useCountAction();

    return (
        <>
            <h2>Count is {count}</h2>
            <button onClick={()=>dispatch({type : "add" , value : 1})}>add one</button>
            <button onClick={()=>dispatch({type : "decrement" , value : 1})}>decrement</button>
            <button onClick={()=>dispatch({type : "reset"})}>reset</button>
        </>
    )
}

export default CounterOne;
