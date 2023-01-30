//an example of context

// import React, {useState} from "react";
//
//
// export const counterContext = React.createContext();
// export const counterContextDispatcher = React.createContext();
//
// const CounterProvider = ({children}) => {
//
//   const [count,setCount] = useState(4);
//
//   return(
//       <counterContext.Provider value={count}>
//         <counterContextDispatcher.Provider value={setCount}>
//           {children}
//         </counterContextDispatcher.Provider>
//       </counterContext.Provider>
//   )
// }
// export default CounterProvider;


//custom hook for context


// import React, {useContext,useState} from "react";
//
// const counterContext = React.createContext();
// const counterContextDispatcher = React.createContext();
//
// const CounterProvider = ({children}) => {
//
//   const [count,setCount] = useState(4);
//
//   return(
//       <counterContext.Provider value={count}>
//         <counterContextDispatcher.Provider value={setCount}>
//           {children}
//         </counterContextDispatcher.Provider>
//       </counterContext.Provider>
//   )
// }
// export default CounterProvider;
//
// export const useCount = ()=> useContext(counterContext);
// export const useCountActions = () => useContext(counterContextDispatcher);


//مدیریت اکشن ها به روش بهتر


// import React, {useContext,useState} from "react";
//
// const counterContext = React.createContext();
// const counterContextDispatcher = React.createContext();
//
// const CounterProvider = ({children}) => {
//
//     const [count,setCount] = useState(4);
//
//     return(
//         <counterContext.Provider value={count}>
//             <counterContextDispatcher.Provider value={setCount}>
//                 {children}
//             </counterContextDispatcher.Provider>
//         </counterContext.Provider>
//     )
// }
// export default CounterProvider;
//
// export const useCount = ()=> useContext(counterContext);
// export const useCountActions = () => {
//     const setCount = useContext(counterContextDispatcher);
//
//     const addOne = () => {
//         setCount((prevCount)=> prevCount + 1);
//     }
//     const addFive = () => {
//         setCount((prevCount)=> prevCount + 5);
//     }
//     const decrement = () => {
//         setCount((prevCount)=> prevCount - 1);
//     }
//     return {addOne,addFive,decrement}
// };


//useContext and useReducer

import React, {useContext, useReducer} from "react";

const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const initialState = 0;
const reducer = (state,action) => {
    switch (action.type) {
        case "add" :
            return state + action.value;
        case "decrement" :
            return state + action.value;
        case "reset" :
            return initialState;
        default :
            return state;
    }
}

const CounterProvider = ({children}) => {

    const [count,dispatch] = useReducer(reducer,initialState);

  return(
      <CounterContext.Provider value={count}>
          <CounterContextDispatcher.Provider value={dispatch}>
              {children}
          </CounterContextDispatcher.Provider>
      </CounterContext.Provider>
  )
}

export default CounterProvider;

export const useCount = ()=> useContext(CounterContext);
export const useCountAction = ()=> useContext(CounterContextDispatcher);