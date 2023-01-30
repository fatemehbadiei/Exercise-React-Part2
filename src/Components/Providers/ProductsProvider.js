//ایجاد کانتکست Products

// import React, {useContext, useState} from "react";
// const ProductContext = React.createContext()
// const ProductContextDispatcher = React.createContext()
//
// const ProductsProvider = ({children}) => {
//     const [products, setProducts] = useState([
//         {id: 1, title: "React.js", price: "89$", quantity: 1},
//         {id: 2, title: "Node.js", price: "99$", quantity: 2},
//         {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//     ])
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={setProducts}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => {
//
//     const setProducts = useContext(ProductContextDispatcher);
//     const products = useContext(ProductContext);
//
//     const removeHandler = (id) => {
//         const filteredProducts = products.filter((p) => p.id !== id);
//         setProducts(filteredProducts)
//     }
//
//     const incrementHandler = (id) => {
//         // way 1 that muted component and state
//         // const product = [...products];
//         // const selectedProduct = product.find((p) => p.id === id);
//         // selectedProduct.quantity++
//         // setProducts(product)
//
//         //way2
//         const index = products.findIndex((item) => item.id === id);
//         const product = {...products[index]};
//         product.quantity++
//         const updatedProducts = [...products];
//         updatedProducts[index] = product
//         setProducts(updatedProducts);
//     }
//
//     const decrementHandler = (id) => {
//         //way 1 that muted component and state
//         // const product = [...products];
//         // const selectedProduct = product.find((p) => p.id === id);
//         // if (selectedProduct.quantity === 1) {
//         //     const filteredProducts = products.filter((p) => p.id !== id);
//         //     setProducts(filteredProducts);
//         // } else {
//         //     selectedProduct.quantity--
//         //     setProducts(product);
//         // }
//
//         //way 2
//         const index = products.findIndex((item) => item.id === id);
//         const product = {...products[index]};
//         if (product.quantity === 1) {
//             const filteredProducts = products.filter((p) => p.id !== id);
//             setProducts(filteredProducts);
//         } else {
//             const updatedProducts = [...products];
//             product.quantity--
//             updatedProducts[index] = product
//             setProducts(updatedProducts);
//         }
//
//     }
//
//     const changeHandler = (event, id) => {
//         //way 1 that muted component and state
//         // const product = [...products];
//         // const selectedProduct = product.find((p) => p.id === id);
//         // selectedProduct.title = event.target.value;
//         // setProducts(product);
//
//         //way 2
//         const index = products.findIndex((item) => item.id === id);
//         const product = {...products[index]};
//         product.title = event.target.value;
//         const updatedProducts = [...products];
//         updatedProducts[index] = product;
//         setProducts(updatedProducts);
//     }
//     return {removeHandler,incrementHandler,decrementHandler,changeHandler};
// };


// //مدیریت اکشن ها با useReducer
//
// import React, {useContext, useReducer} from "react";
//
// const ProductContext = React.createContext();
// const ProductContextDispatcher = React.createContext();
//
// const initialState = [
//     {id: 1, title: "React.js", price: "89$", quantity: 1},
//     {id: 2, title: "Node.js", price: "99$", quantity: 2},
//     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// ];
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "remove" : {
//             const filteredProducts = state.filter((p) => p.id !== action.id);
//             return filteredProducts;
//         }
//         case "increment" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.quantity++
//             const updatedProducts = [...state];
//             updatedProducts[index] = product
//             return updatedProducts;
//         }
//         case "decrement" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             if (product.quantity === 1) {
//                 const filteredProducts = state.filter((p) => p.id !== action.id);
//                 return filteredProducts;
//             } else {
//                 const updatedProducts = [...state];
//                 product.quantity--
//                 updatedProducts[index] = product
//                 return updatedProducts;
//             }
//
//         }
//         case "edit" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.title = action.event.target.value;
//             const updatedProducts = [...state];
//             updatedProducts[index] = product;
//             return updatedProducts;
//         }
//         default :
//             return state;
//     }
// }
//
// const ProductsProvider = ({children}) => {
//
//     const [products, dispatch] = useReducer(reducer, initialState);
//
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={dispatch}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => useContext(ProductContextDispatcher);


//ایجاد کامپوننت filter,ایجاد اکشن فیلتر

// import React, {useContext, useReducer} from "react";
// import {productsData} from "../../db/product";
//
// const ProductContext = React.createContext();
// const ProductContextDispatcher = React.createContext();
//
// // const initialState = [
// //     {id: 1, title: "React.js", price: "89$", quantity: 1},
// //     {id: 2, title: "Node.js", price: "99$", quantity: 2},
// //     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// // ];
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "remove" : {
//             const filteredProducts = state.filter((p) => p.id !== action.id);
//             return filteredProducts;
//         }
//         case "increment" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.quantity++
//             const updatedProducts = [...state];
//             updatedProducts[index] = product
//             return updatedProducts;
//         }
//         case "decrement" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             if (product.quantity === 1) {
//                 const filteredProducts = state.filter((p) => p.id !== action.id);
//                 return filteredProducts;
//             } else {
//                 const updatedProducts = [...state];
//                 product.quantity--
//                 updatedProducts[index] = product
//                 return updatedProducts;
//             }
//
//         }
//         case "edit" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.title = action.event.target.value;
//             const updatedProducts = [...state];
//             updatedProducts[index] = product;
//             return updatedProducts;
//         }
//         case "filter" :
//             if (action.event.target.value === "") {
//                 return productsData;
//             } else {
//                 const updateProducts = productsData.filter((p) => p.availableSizes.indexOf(action.event.target.value) >= 0);
//                 return updateProducts
//             }
//         default :
//             return state;
//     }
// }
//
// const ProductsProvider = ({children}) => {
//
//     const [products, dispatch] = useReducer(reducer, productsData);
//
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={dispatch}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => useContext(ProductContextDispatcher);


//استفاده از کتابخانه react select


// import React, {useContext, useReducer} from "react";
// import {productsData} from "../../db/product";
//
// const ProductContext = React.createContext();
// const ProductContextDispatcher = React.createContext();
//
// // const initialState = [
// //     {id: 1, title: "React.js", price: "89$", quantity: 1},
// //     {id: 2, title: "Node.js", price: "99$", quantity: 2},
// //     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// // ];
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "remove" : {
//             const filteredProducts = state.filter((p) => p.id !== action.id);
//             return filteredProducts;
//         }
//         case "increment" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.quantity++
//             const updatedProducts = [...state];
//             updatedProducts[index] = product
//             return updatedProducts;
//         }
//         case "decrement" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             if (product.quantity === 1) {
//                 const filteredProducts = state.filter((p) => p.id !== action.id);
//                 return filteredProducts;
//             } else {
//                 const updatedProducts = [...state];
//                 product.quantity--
//                 updatedProducts[index] = product
//                 return updatedProducts;
//             }
//
//         }
//         case "edit" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.title = action.event.target.value;
//             const updatedProducts = [...state];
//             updatedProducts[index] = product;
//             return updatedProducts;
//         }
//         case "filter" :{
//             if (action.selectedOption.value === "") {
//                 return productsData;
//             } else {
//                 const updateProducts = productsData.filter
//                 ((p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0);
//                 return updateProducts
//             }
//         }
//         default :
//             return state;
//     }
// }
//
// const ProductsProvider = ({children}) => {
//
//     const [products, dispatch] = useReducer(reducer, productsData);
//
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={dispatch}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => useContext(ProductContextDispatcher);



// //sort کردن بر اساس قیمت
//
// import React, {useContext, useReducer} from "react";
// import {productsData} from "../../db/product";
//
// const ProductContext = React.createContext();
// const ProductContextDispatcher = React.createContext();
//
// // const initialState = [
// //     {id: 1, title: "React.js", price: "89$", quantity: 1},
// //     {id: 2, title: "Node.js", price: "99$", quantity: 2},
// //     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// // ];
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "remove" : {
//             const filteredProducts = state.filter((p) => p.id !== action.id);
//             return filteredProducts;
//         }
//         case "increment" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.quantity++
//             const updatedProducts = [...state];
//             updatedProducts[index] = product
//             return updatedProducts;
//         }
//         case "decrement" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             if (product.quantity === 1) {
//                 const filteredProducts = state.filter((p) => p.id !== action.id);
//                 return filteredProducts;
//             } else {
//                 const updatedProducts = [...state];
//                 product.quantity--
//                 updatedProducts[index] = product
//                 return updatedProducts;
//             }
//
//         }
//         case "edit" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.title = action.event.target.value;
//             const updatedProducts = [...state];
//             updatedProducts[index] = product;
//             return updatedProducts;
//         }
//         case "filter" :{
//             if (action.selectedOption.value === "") {
//                 return productsData;
//             } else {
//                 const updateProducts = productsData.filter
//                 ((p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0);
//                 return updateProducts
//             }
//         }
//         case "sort":{
//             const value = action.selectedOption.value //destructuring
//             const product = [...state];
//             if (value === "lowest") {
//                 const sortedProduct = product.sort((a,b)=>{
//                     if (a.price > b.price){
//                         return 1
//                     }if (a.price < b.price){
//                         return -1
//                     }
//                     return 0
//                 });
//                 return sortedProduct;
//             }
//             else{
//                 const sortedProduct = product.sort((a,b)=>{
//                     if (a.price < b.price){
//                         return 1
//                     }if (a.price > b.price){
//                         return -1
//                     }
//                     return 0
//                 });
//                 return sortedProduct;
//             }
//         }
//         default :
//             return state;
//     }
// }
//
// const ProductsProvider = ({children}) => {
//
//     const [products, dispatch] = useReducer(reducer, productsData);
//
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={dispatch}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => useContext(ProductContextDispatcher);



//use lodash

// import React, {useContext, useReducer} from "react";
// import {productsData} from "../../db/product";
// import _ from "lodash";
//
// const ProductContext = React.createContext();
// const ProductContextDispatcher = React.createContext();
//
// // const initialState = [
// //     {id: 1, title: "React.js", price: "89$", quantity: 1},
// //     {id: 2, title: "Node.js", price: "99$", quantity: 2},
// //     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// // ];
//
// const reducer = (state, action) => {
//     switch (action.type) {
//         case "remove" : {
//             const filteredProducts = state.filter((p) => p.id !== action.id);
//             return filteredProducts;
//         }
//         case "increment" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.quantity++
//             const updatedProducts = [...state];
//             updatedProducts[index] = product
//             return updatedProducts;
//         }
//         case "decrement" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             if (product.quantity === 1) {
//                 const filteredProducts = state.filter((p) => p.id !== action.id);
//                 return filteredProducts;
//             } else {
//                 const updatedProducts = [...state];
//                 product.quantity--
//                 updatedProducts[index] = product
//                 return updatedProducts;
//             }
//
//         }
//         case "edit" : {
//             const index = state.findIndex((item) => item.id === action.id);
//             const product = {...state[index]};
//             product.title = action.event.target.value;
//             const updatedProducts = [...state];
//             updatedProducts[index] = product;
//             return updatedProducts;
//         }
//         case "filter" :{
//             if (action.selectedOption.value === "") {
//                 return productsData;
//             } else {
//                 const updateProducts = productsData.filter
//                 ((p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0);
//                 return updateProducts
//             }
//         }
//         case "sort":{
//             const value = action.selectedOption.value //destructuring
//             const product = [...state];
//             if (value === "lowest") {
//                return _.orderBy(product,["price"],["asc"]);
//             }
//             else{
//                 return _.orderBy(product,["price"],["desc"]);
//             }
//         }
//         case "search" :{
//             const value = action.event.target.value //destructuring
//
//             if (value === ""){
//                 return productsData;
//             }else{
//                 const filteredProducts = productsData.filter((p)=> p.title.toLowerCase().includes(value.toLowerCase()));
//                 return filteredProducts;
//             }
//         }
//         default :
//             return state;
//     }
// }
//
// const ProductsProvider = ({children}) => {
//
//     const [products, dispatch] = useReducer(reducer, productsData);
//
//     return (
//         <ProductContext.Provider value={products}>
//             <ProductContextDispatcher.Provider value={dispatch}>
//                 {children}
//             </ProductContextDispatcher.Provider>
//         </ProductContext.Provider>
//     )
// }
//
// export default ProductsProvider;
//
// export const useProducts = () => useContext(ProductContext);
// export const useProductsAction = () => useContext(ProductContextDispatcher);


//سرچ کردن بر اساس فیلتر

import React, {useContext, useReducer} from "react";
import {productsData} from "../../db/product";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();

// const initialState = [
//     {id: 1, title: "React.js", price: "89$", quantity: 1},
//     {id: 2, title: "Node.js", price: "99$", quantity: 2},
//     {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
// ];

const reducer = (state, action) => {
    switch (action.type) {
        case "remove" : {
            const filteredProducts = state.filter((p) => p.id !== action.id);
            return filteredProducts;
        }
        case "increment" : {
            const index = state.findIndex((item) => item.id === action.id);
            const product = {...state[index]};
            product.quantity++
            const updatedProducts = [...state];
            updatedProducts[index] = product
            return updatedProducts;
        }
        case "decrement" : {
            const index = state.findIndex((item) => item.id === action.id);
            const product = {...state[index]};
            if (product.quantity === 1) {
                const filteredProducts = state.filter((p) => p.id !== action.id);
                return filteredProducts;
            } else {
                const updatedProducts = [...state];
                product.quantity--
                updatedProducts[index] = product
                return updatedProducts;
            }

        }
        case "edit" : {
            const index = state.findIndex((item) => item.id === action.id);
            const product = {...state[index]};
            product.title = action.event.target.value;
            const updatedProducts = [...state];
            updatedProducts[index] = product;
            return updatedProducts;
        }
        case "filter" :{
            if (action.selectedOption.value === "") {
                return productsData;
            } else {
                const updateProducts = productsData.filter
                ((p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0);
                return updateProducts
            }
        }
        case "sort":{
            const value = action.selectedOption.value //destructuring
            const product = [...state];
            if (value === "lowest") {
                return _.orderBy(product,["price"],["asc"]);
            }
            else{
                return _.orderBy(product,["price"],["desc"]);
            }
        }
        case "search" :{
            const value = action.event.target.value //destructuring

            if (value === ""){
                return state;
            }else{
                const filteredProducts = state.filter((p)=> p.title.toLowerCase().includes(value.toLowerCase()));
                return filteredProducts;
            }
        }
        default :
            return state;
    }
}

const ProductsProvider = ({children}) => {

    const [products, dispatch] = useReducer(reducer, productsData);

    return (
        <ProductContext.Provider value={products}>
            <ProductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
    )
}

export default ProductsProvider;

export const useProducts = () => useContext(ProductContext);
export const useProductsAction = () => useContext(ProductContextDispatcher);
