//a good example of hoc

// import {useState} from "react";
//
// const ClickCounter = () => {
//
//   const [count,setCount] = useState(0);
//
//   const incrementCount = () => {
//     setCount(count + 1);
//   }
//
//   return(
//       <div>
//         <button onClick={incrementCount}>Click {count} times</button>
//       </div>
//   )
// }
// export default ClickCounter;


//write this code with withCounter

// import WithCounter from "../HOC/WithCounter";
//
// const ClickCounter = ({count,incrementCount,name}) => {
//     console.log(name)
//     return(
//         <div>
//             <button onClick={incrementCount}>Click {count} times</button>
//         </div>
//     )
// }
// export default WithCounter(ClickCounter);


//write this code with different increment value

import WithCounter from "../HOC/WithCounter";

const ClickCounter = ({count,incrementCount,name}) => {
    console.log(name)
    return(
        <div>
            <button onClick={incrementCount}>Click {count} times</button>
        </div>
    )
}
export default WithCounter(ClickCounter,10);