//a good example of hoc
//write this code with withCounter

// import {useState} from "react";
//
// const WithCounter = (WrappedComponent) => {
//     const UpdatedComponent = (props) => {
//         const [count,setCount] = useState(0);
//
//         const incrementCount = () => {
//             setCount(count + 1);
//         }
//         return(
//             <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>
//         )
//     }
//     return UpdatedComponent;
// }
//
// export default WithCounter;


//write this code with different increment value

import {useState} from "react";

const WithCounter = (WrappedComponent,incrementValue) => {
    const UpdatedComponent = (props) => {
        const [count,setCount] = useState(0);

        const incrementCount = () => {
            setCount(count + incrementValue);
        }
        return(
            <WrappedComponent count={count} incrementCount={incrementCount} {...props}/>
        )
    }
    return UpdatedComponent;
}

export default WithCounter;

