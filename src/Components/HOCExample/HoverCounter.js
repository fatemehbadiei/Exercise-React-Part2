//a good example of hoc

// import {useState} from "react";
//
// const HoverCounter = () => {
//     const [count, setCount] = useState(0);
//
//     const incrementCount = () => {
//         setCount(count + 1);
//     }
//
//     return (
//         <div>
//             <button onMouseOver={incrementCount}>Hover {count} times</button>
//         </div>
//     )
// }
//
// export default HoverCounter;


//write this code with withCounter

// import WithCounter from "../HOC/WithCounter";
//
// const HoverCounter = ({count,incrementCount}) => {
//
//     return (
//         <div>
//             <button onMouseOver={incrementCount}>Hover {count} times</button>
//         </div>
//     )
// }
//
// export default WithCounter(HoverCounter);


//write this code with different increment value

import WithCounter from "../HOC/WithCounter";

const HoverCounter = ({count,incrementCount}) => {

    return (
        <div>
            <button onMouseOver={incrementCount}>Hover {count} times</button>
        </div>
    )
}

export default WithCounter(HoverCounter,5);