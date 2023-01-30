//lifting state up

// import React from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = (props) => {
//     return (
//         <div className={styles.product}>
//             <p>product name:{props.product.title} course</p>
//             <p>product price:{props.product.price}</p>
//             <span className={styles.value}>{props.product.quantity}</span>
//             <br/>
//             <input type="text" onChange={props.onChange} value={props.product.title}/>
//             <button onClick={props.onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={props.onDecrement} className={`${styles.button} ${props.product.quantity === 1 && styles.remove}`}>
//                 {props.product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={props.onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;

//object destructuring


// import React from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


//useEffect hook
//componentDidMount,componentDidUpdate,componentWillUnMount

// import React, {useEffect} from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//
//     useEffect(()=>{
//         console.log("Product.js useEffect");
//     })
//
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


//componentDidMount
// import React, {useEffect} from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//
//     useEffect(()=>{
//         console.log("Product.js useEffect");
//     },[])
//
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


//componentDidUpdate
// import React, {useEffect} from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//
//     useEffect(()=>{
//         console.log("Product.js useEffect");
//     },[product])
//
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


//componentWillUnMount//componentDidMount
// import React, {useEffect} from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//
//     useEffect(()=>{
//         return()=>{
//             console.log("Product.js useEffect");
//         }
//     },[])
//
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


//context in react


// import React, {useContext} from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
// import {userContext, websiteContext} from "../../App";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//
//     const user = useContext(userContext);
//     const website = useContext(websiteContext);
//     console.log(user,website);
//
//     // useEffect(()=>{
//     //     return()=>{
//     //         console.log("Product.js useEffect");
//     //     }
//     // },[])
//
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;


// //تبدیل app به فانکشنال کامپوننت
//
// import React from "react";
// import styles from "./Product1.module.css";
// import {BiTrash} from "react-icons/bi";
//
// const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
//     return (
//         <div className={styles.product}>
//             <p>product name:{product.title} course</p>
//             <p>product price:{product.price}</p>
//             <span className={styles.value}>{product.quantity}</span>
//             <br/>
//             <input type="text" onChange={onChange} value={product.title}/>
//             <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
//             <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
//                 {product.quantity > 1 ? "-" : <BiTrash/>}
//             </button>
//             <button onClick={onDelete} className={styles.button}>Delete</button>
//         </div>
//     )
// }
//
// export default Product1;



//ایجاد کامپوننت filter

import React from "react";
import styles from "./Product1.module.css";
import {BiTrash} from "react-icons/bi";

const Product1 = ({product,onChange,onIncrement,onDecrement,onDelete}) => {
    return (
        <div className={styles.product}>
            <p>product name:{product.title} course</p>
            <p>product price:{product.price}</p>
            <span className={styles.value}>{product.quantity}</span>
            <br/>
            {/*<input type="text" onChange={onChange} value={product.title} className={styles.input}/>*/}
            <button onClick={onIncrement} className={`${styles.button} ${styles.inc}`}>+</button>
            <button onClick={onDecrement} className={`${styles.button} ${product.quantity === 1 && styles.remove}`}>
                {product.quantity > 1 ? "-" : <BiTrash/>}
            </button>
            <button onClick={onDelete} className={styles.button}>Delete</button>
        </div>
    )
}

export default Product1;