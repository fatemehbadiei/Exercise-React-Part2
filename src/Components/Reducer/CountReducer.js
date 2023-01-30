//مثال کاربردی از useReducer

// import {useReducer} from "react";
//
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case "addOne":
//             return state + 1;
//         case "addFive" :
//             return state + 5;
//         case "decrement" :
//             return state - 1
//         default :
//             return state
//     }
// }
// const CountReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);
//
//     return (
//         <>
//             <h2>Count is - {count}</h2>
//             <button onClick={() => dispatch("addOne")}>Add One</button>
//             <button onClick={() => dispatch("addFive")}>Add Five</button>
//             <button onClick={() => dispatch("decrement")}>Decrement</button>
//         </>
//     )
//
// }
// export default CountReducer;

//استیت و اکشن های پیچیده تر


// import {useReducer} from "react";
//
// const initialState = {
//     firstCount : 0 ,
//     secondCount : 0
// }
//
// const reducer = (state,action) => {
//   switch (action.type) {
//       case "add1" :
//           return {...state,firstCount: state.firstCount + 1};
//       case "decrement1" :
//           return {...state,firstCount: state.firstCount - 1};
//       case "add2" :
//           return {...state,secondCount: state.secondCount + 1};
//       case "decrement2" :
//           return {...state,secondCount: state.secondCount - 1};
//       case "reset" :
//           return initialState;
//       default :
//           return state
//   }
// }
//
// const CountReducer = () =>{
//
//     const [count,dispatch] = useReducer(reducer,initialState);
//
//     return(
//         <>
//             <h2>CountOne is {count.firstCount}</h2>
//             <h2>CountTwo is {count.secondCount}</h2>
//             <button onClick={()=>dispatch({type:"add1"})}>Add one</button>
//             <button onClick={()=>dispatch({type:"decrement1"})}>decrement</button>
//             <button onClick={()=>dispatch({type:"add2"})}>Add one</button>
//             <button onClick={()=>dispatch({type:"decrement2"})}>decrement</button>
//             <button onClick={()=>dispatch({type:"reset"})}>reset</button>
//         </>
//     )
// }
//
// export default CountReducer;


// import {useReducer} from "react";
//
// const initialState = {
//     firstCount : 0,
//     secondCount : 0
// }
//
// const reducer = (state,action) => {
//     switch (action.type){
//         case "add" :
//             return {...state , firstCount: state.firstCount + action.value};
//         case "addF" :
//             return {...state, firstCount: state.firstCount + action.value};
//         case "decrement" :
//             return {...state, firstCount: state.firstCount - action.value};
//         case "add2" :
//             return {...state , secondCount: state.secondCount + action.value};
//         case "addF2" :
//             return {...state, secondCount: state.secondCount + action.value};
//         case "decrement2" :
//             return {...state, secondCount: state.secondCount - action.value};
//         default :
//             return state;
//     }
// }
//
// const CountReducer = () => {
//
//     const [count,dispatch] = useReducer(reducer,initialState);
//
//     return (
//         <>
//             <h2>CountOne is {count.firstCount}</h2>
//             <h2>CountTwo is {count.secondCount}</h2>
//             <div>
//                 <button onClick={()=> dispatch({type :"add" , value: 1})} >Add one</button>
//                 <button onClick={()=> dispatch({type :"addF" , value: 5})} >Add five</button>
//                 <button onClick={()=> dispatch({type :"decrement" , value: 1})} >decrement</button>
//             </div>
//             <div>
//                 <button onClick={()=> dispatch({type :"add2" , value: 1})} >Add one</button>
//                 <button onClick={()=> dispatch({type :"addF2" , value: 5})} >Add five</button>
//                 <button onClick={()=> dispatch({type :"decrement2" , value: 1})} >decrement</button>
//             </div>
//         </>
//     )
// }
//
// export default CountReducer;



//multiple useReducer

import {useReducer} from "react";

const initialState = 0;

const reducer = (state,action) => {
  switch (action.type){
      case "add" :
          return state + action.value;
      case "decrement" :
          return state - action.value;
      case "reset" :
          return initialState;
      default :
          return state;
  }
}

const CountReducer = () => {

    const [count,dispatch] = useReducer(reducer,initialState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

  return (
      <>
        <div>
            <h2>Count is {count}</h2>
            <button onClick={()=> dispatch({type : "add" , value : 5})}>add five</button>
            <button onClick={()=> dispatch({type : "decrement" , value : 1})}>decrement</button>
            <button onClick={()=> dispatch({type : "reset"})}>reset</button>
        </div>
          <div>
              <h2>CountTwo is {countTwo}</h2>
              <button onClick={()=> dispatchTwo({type : "add" , value : 5})}>add five</button>
              <button onClick={()=> dispatchTwo({type : "decrement" , value : 1})}>decrement</button>
              <button onClick={()=> dispatchTwo({type : "reset"})}>reset</button>
          </div>
      </>
  )
}

export default CountReducer;