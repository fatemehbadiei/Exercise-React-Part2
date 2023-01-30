// import {useState} from "react";
// import styles from "./Search.module.css"
// import {useProductsAction} from "../../Components/Providers/ProductsProvider";
//
// const SearchBar = () => {
//     const dispatch = useProductsAction();
//
//     const [value,setValue] = useState("");
//     const changeHandler = (e) => {
//         // console.log(e.target.value);
//         dispatch({type : "search" , event : e});
//         setValue(e.target.value)
//     }
//   return(
//       <div className={styles.formControl}>
//           <div>Search For:</div>
//           <input type="text" placeholder="Search..." onChange={changeHandler} value={value} className={styles.input}/>
//       </div>
//   )
// }
//
// export default SearchBar;


//سرچ کردن بر اساس فیلتر

import {useState} from "react";
import styles from "./Search.module.css"
import {useProductsAction} from "../../Components/Providers/ProductsProvider";

const SearchBar = ({filter}) => {
    const dispatch = useProductsAction();

    const [value,setValue] = useState("");
    const changeHandler = (e) => {
        // console.log(e.target.value);
        dispatch({type:"filter" , selectedOption:filter});
        dispatch({type : "search" , event : e});
        setValue(e.target.value)
    }
    return(
        <div className={styles.formControl}>
            <div>Search For:</div>
            <input type="text" placeholder="Search..." onChange={changeHandler} value={value} className={styles.input}/>
        </div>
    )
}

export default SearchBar;