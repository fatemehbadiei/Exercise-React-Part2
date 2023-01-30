// import React from "react";
//
// const Product = (props) =>{
//     console.log(props)
//    return(
//        <div>
//            <p>product name:{props.name} course</p>
//            <p>product price:{props.price}</p>
//            {props.children}
//        </div>
//    )
// }
//
// export default Product;

//استایل دادن به کامپوننت ها از نوع module.css

// import React from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//     console.log(props)
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.name} course</p>
//             <p>product price:{props.price}</p>
//             {props.children}
//         </div>
//     )
// }
//
// export default Product;

//pass function as props

// import React from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//     console.log(props)
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.name} course</p>
//             <p>product price:{props.price}</p>
//             <button onClick={props.onDelete}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;

//style increment btn


//adding increment handler

// import React from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>increment</button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;


//controlled component

// import React from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <br/>
//             <input type="text" onChange={props.onChange} value={props.product.title}/>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>increment</button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;

//save value of input in state

// import React, {useState} from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//
//     const [userName,setUserName] = useState("");
//     const changeHandler = (e) => {
//       setUserName(e.target.value)
//     }
//
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <br/>
//             <input type="text" onChange={changeHandler} value={userName}/>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>increment</button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;


//decrement quantity

// import React from "react";
// import styles from "./Product1.module.css";
// const Product = (props) =>{
//     return(
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <br/>
//             <input type="text" onChange={props.onChange} value={props.product.title}/>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>Increment</button>
//             <button onClick={props.onDecrement} className={`${styles.button} ${styles.remove}`}>Decrement</button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;


//adding react-icon

// import React from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product = (props) => {
//     return (
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <br/>
//             <input type="text" onChange={props.onChange} value={props.product.title}/>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={props.onDecrement} className={`${styles.button} ${styles.remove}`}>
//                 {props.product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product;

//dynamic style in react

import React from "react";
import styles from "./Product.module.css";
import {BiTrash} from "react-icons/bi";

const Product = (props) => {
    return (
        <div className={styles.product}>
            <p>product name:{props.product.title} course</p>
            <p>product price:{props.product.price}</p>
            <span className={styles.value}>{props.product.quantity}</span>
            <br/>
            <input type="text" onChange={props.onChange} value={props.product.title} className={styles.input}/>
            <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
            <button onClick={props.onDecrement} className={`${styles.button} ${props.product.quantity === 1 && styles.remove}`}>
                {props.product.quantity > 1 ? "-" : <BiTrash/>}
            </button>
            <button onClick={props.onDelete} className={styles.button}>Delete</button>
        </div>
    )
}

export default Product;