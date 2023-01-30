//اضافه کردن Drop Down به برنامه

// import {useProductsAction} from "../Providers/ProductsProvider";
//
// const Filter = () => {
//
//     const dispatch = useProductsAction();
//
//     return (
//         <div>
//             <p>Filter Component Based On :</p>
//             <div>Order By
//                 <select onChange={(e)=> dispatch({type:"filter" , event : e})}>
//                     <option value="">All</option>
//                     <option value="XS">XS</option>
//                     <option value="S">S</option>
//                     <option value="M">M</option>
//                     <option value="L">L</option>
//                     <option value="XL">XL</option>
//                     <option value="XXL">XXL</option>
//                 </select>
//             </div>
//         </div>
//     )
// }
//
// export default Filter;

// //ایجاد اکشن فیلتر
//
// import {useProductsAction} from "../Providers/ProductsProvider";
// import {useState} from "react";
//
// const Filter = () => {
//
//     const dispatch = useProductsAction();
//
//     const [value,setValue] = useState("");
//
//     const changeHandler = (e) => {
//         dispatch({type:"filter" , event : e});
//         setValue(e.target.value);
//     }
//
//     return (
//         <div>
//             <p>Filter Component Based On :</p>
//             <div>Order By
//                 <select onChange={changeHandler} value={value}>
//                     <option value="">All</option>
//                     <option value="XS">XS</option>
//                     <option value="S">S</option>
//                     <option value="M">M</option>
//                     <option value="L">L</option>
//                     <option value="XL">XL</option>
//                     <option value="XXL">XXL</option>
//                 </select>
//             </div>
//         </div>
//     )
// }
//
// export default Filter;

//استفاده از کتابخانه react select

// import {useProductsAction} from "../Providers/ProductsProvider";
// import {useState} from "react";
// import Select from "react-select";
// import styles from "./filter.module.css"
//
// const Filter = () => {
//
//     const options = [
//         {value : "" , label : "All"},
//         {value : "XS" , label : "XS"},
//         {value : "S" , label : "S"},
//         {value : "M" , label : "M"},
//         {value : "L" , label : "L"},
//         {value : "XL" , label : "XL"},
//         {value : "XXL" , label : "XXL"}
//     ]
//
//     const dispatch = useProductsAction();
//
//     const [value,setValue] = useState("");
//
//     const changeHandler = (selectedOption) => {
//         console.log(selectedOption);
//         dispatch({type:"filter" , selectedOption:selectedOption});
//         setValue(selectedOption);
//     }
//
//     return (
//         <div className={styles.filter}>
//             <p>Filter Component Based On :</p>
//             <div className={styles.selectContainer}>
//                 <span>Order By</span>
//                 <Select onChange={changeHandler} value={value} options={options} className={styles.select}/>
//             </div>
//         </div>
//
//     )
// }
//
// export default Filter;



// //sort کردن بر اساس قیمت
//
// import {useProductsAction} from "../Providers/ProductsProvider";
// import {useState} from "react";
// import Select from "react-select";
// import styles from "./filter.module.css"
//
// const Filter = () => {
//
//     const options = [
//         {value : "" , label : "All"},
//         {value : "XS" , label : "XS"},
//         {value : "S" , label : "S"},
//         {value : "M" , label : "M"},
//         {value : "L" , label : "L"},
//         {value : "XL" , label : "XL"},
//         {value : "XXL" , label : "XXL"}
//     ]
//
//     const sortOptions = [
//         {value : "highest" , label : "Highest"},
//         {value : "lowest" , label : "Lowest"},
//     ]
//
//     const dispatch = useProductsAction();
//
//     const [value,setValue] = useState("");
//     const [sort,setSort] = useState("");
//
//     const changeHandler = (selectedOption) => {
//         console.log(selectedOption);
//         dispatch({type:"filter" , selectedOption:selectedOption});
//         // console.log(sort)
//         dispatch({type:"sort",selectedOption : sort});
//         setValue(selectedOption);
//     }
//
//     const sortHandler = (selectedOption) => {
//         // console.log(selectedOption);
//         dispatch({type:"sort",selectedOption})
//         setSort(selectedOption);
//     }
//     return (
//         <div className={styles.filter}>
//             <p>Filter Component Based On :</p>
//             <div className={styles.selectContainer}>
//                 <span>Order By</span>
//                 <Select onChange={changeHandler} value={value} options={options} className={styles.select}/>
//             </div>
//             <div className={styles.selectContainer}>
//                 <span>Sort By</span>
//                 <Select onChange={sortHandler} value={sort} options={sortOptions} className={styles.select}/>
//             </div>
//         </div>
//
//     )
// }
//
// export default Filter;


// //استخراج کامپوننت search
// //
// // import {useProductsAction} from "../Providers/ProductsProvider";
// // import {useState} from "react";
// // import styles from "./filter.module.css"
// // import SelectComponent from "../../common/SelectComponent/SelectComponent";
// //
// // const Filter = () => {
// //
// //     const options = [
// //         {value : "" , label : "All"},
// //         {value : "XS" , label : "XS"},
// //         {value : "S" , label : "S"},
// //         {value : "M" , label : "M"},
// //         {value : "L" , label : "L"},
// //         {value : "XL" , label : "XL"},
// //         {value : "XXL" , label : "XXL"}
// //     ]
// //
// //     const sortOptions = [
// //         {value : "highest" , label : "Highest"},
// //         {value : "lowest" , label : "Lowest"},
// //     ]
// //
// //     const dispatch = useProductsAction();
// //
// //     const [value,setValue] = useState("");
// //     const [sort,setSort] = useState("");
// //
// //     const changeHandler = (selectedOption) => {
// //         console.log(selectedOption);
// //         dispatch({type:"filter" , selectedOption:selectedOption});
// //         // console.log(sort)
// //         dispatch({type:"sort",selectedOption : sort});
// //         setValue(selectedOption);
// //     }
// //
// //     const sortHandler = (selectedOption) => {
// //         // console.log(selectedOption);
// //         dispatch({type:"sort",selectedOption})
// //         setSort(selectedOption);
// //     }
// //     return (
// //         <div className={styles.filter}>
// //             <p>Filter Component Based On</p>
// //             <SelectComponent
// //                 onChange={changeHandler}
// //                 value={value}
// //                 options={options}
// //                 title="Size"
// //             />
// //             <SelectComponent
// //                 onChange={sortHandler}
// //                 value={sort}
// //                 options={sortOptions}
// //                 title="Price"
// //             />
// //         </div>
// //
// //     )
// // }
// //
// // export default Filter;


//استفاده از rest operators در props

// import {useProductsAction} from "../Providers/ProductsProvider";
// import {useState} from "react";
// import styles from "./filter.module.css"
// import SelectComponent from "../../common/SelectComponent/SelectComponent";
//
// const Filter = () => {
//
//     const filterOptions = [
//         {value : "" , label : "All"},
//         {value : "XS" , label : "XS"},
//         {value : "S" , label : "S"},
//         {value : "M" , label : "M"},
//         {value : "L" , label : "L"},
//         {value : "XL" , label : "XL"},
//         {value : "XXL" , label : "XXL"}
//     ]
//
//     const sortOptions = [
//         {value : "highest" , label : "Highest"},
//         {value : "lowest" , label : "Lowest"},
//     ]
//
//     const dispatch = useProductsAction();
//
//     const [filter,setFilter] = useState("");
//     const [sort,setSort] = useState("");
//
//     const filterHandler = (selectedOption) => {
//         console.log(selectedOption);
//         dispatch({type:"filter" , selectedOption:selectedOption});
//         // console.log(sort)
//         dispatch({type:"sort",selectedOption : sort});
//         setFilter(selectedOption);
//     }
//
//     const sortHandler = (selectedOption) => {
//         // console.log(selectedOption);
//         dispatch({type:"sort",selectedOption})
//         setSort(selectedOption);
//     }
//     return (
//         <div className={styles.filter}>
//             <p>Filter Component Based On</p>
//             <SelectComponent
//                 onChange={filterHandler}
//                 value={filter}
//                 options={filterOptions}
//                 title="Size"
//             />
//             <SelectComponent
//                 onChange={sortHandler}
//                 value={sort}
//                 options={sortOptions}
//                 title="Price"
//             />
//         </div>
//
//     )
// }
//
// export default Filter;


//سرچ کردن بر اساس فیلتر


import {useProductsAction} from "../Providers/ProductsProvider";
import {useState} from "react";
import styles from "./filter.module.css"
import SelectComponent from "../../common/SelectComponent/SelectComponent";
import SearchBar from "../../common/Search/Search";
import React from "react";

const Filter = () => {

    const filterOptions = [
        {value : "" , label : "All"},
        {value : "XS" , label : "XS"},
        {value : "S" , label : "S"},
        {value : "M" , label : "M"},
        {value : "L" , label : "L"},
        {value : "XL" , label : "XL"},
        {value : "XXL" , label : "XXL"}
    ]

    const sortOptions = [
        {value : "highest" , label : "Highest"},
        {value : "lowest" , label : "Lowest"},
    ]

    const dispatch = useProductsAction();

    const [filter,setFilter] = useState("");
    const [sort,setSort] = useState("");

    const filterHandler = (selectedOption) => {
        console.log(filter);
        console.log(selectedOption);
        dispatch({type:"filter" , selectedOption:selectedOption});
        // console.log(sort)
        dispatch({type:"sort",selectedOption : sort});
        setFilter(selectedOption);
    }

    const sortHandler = (selectedOption) => {
        // console.log(selectedOption);
        dispatch({type:"sort",selectedOption})
        setSort(selectedOption);
    }
    return (
        <>
            <SearchBar filter={filter}/>
            <div className={styles.filter}>
                <p>Filter Component Based On</p>
                <SelectComponent
                    onChange={filterHandler}
                    value={filter}
                    options={filterOptions}
                    title="Size"
                />
                <SelectComponent
                    onChange={sortHandler}
                    value={sort}
                    options={sortOptions}
                    title="Price"
                />
            </div>
        </>

    )
}

export default Filter;