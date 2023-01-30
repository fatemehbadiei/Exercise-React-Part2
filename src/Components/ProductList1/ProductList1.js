//lifting state up

// import React, {Component} from "react";
// import Product from "./Product1";
//
// class ProductList1 extends Component {
//
//     renderProduct = () => {
//         if (this.props.products.length === 0) return <div>There is no product in cart</div>
//         return (
//             <div>
//                 {this.props.products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => this.props.onDelete(product.id)}
//                             onIncrement={() => this.props.onIncrement(product.id)}
//                             onDecrement={() => this.props.onDecrement(product.id)}
//                             onChange={(e) => this.props.onChange(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//
//     }
//
//     render() {
//       return (
//           <div>
//               {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
//               {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
//               {!this.props.products.length && <div>Go to shopping</div>}
//               {this.renderProduct()}
//           </div>
//       )
//     }
// }
//
// export default ProductList1;

//object destructuring

// import React, {Component} from "react";
// import Product from "./Product1";
//
// class ProductList1 extends Component {
//
//     renderProduct = () => {
//
//         const{products,onDelete,onIncrement,onDecrement,onChange} = this.props
//
//         if (products.length === 0) return <div>There is no product in cart</div>
//         return (
//             <div>
//                 {products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => onDelete(product.id)}
//                             onIncrement={() => onIncrement(product.id)}
//                             onDecrement={() => onDecrement(product.id)}
//                             onChange={(e) => onChange(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//
//     }
//
//     render() {
//         const {products} = this.props
//         return (
//             <div>
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
//                 {!products.length && <div>Go to shopping</div>}
//                 {this.renderProduct()}
//             </div>
//         )
//     }
// }
//
// export default ProductList1;


// import React, {Component} from "react";
// import Product from "./Product1";
//
// class ProductList1 extends Component {
//
//     // componentDidUpdate(prevProps,prevState){
//     //     if(prevProps.products !== this.props.products ){
//     //         console.log("ajax call")
//     //     }
//     // }
//
//     // shouldComponentUpdate(nextProps,nextState){
//     //     // return false
//     //     return true
//     // }
//
//     renderProduct = () => {
//
//         const{products,onDelete,onIncrement,onDecrement,onChange} = this.props
//
//         if (products.length === 0) return <div>There is no product in cart</div>
//         return (
//             <div>
//                 {products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => onDelete(product.id)}
//                             onIncrement={() => onIncrement(product.id)}
//                             onDecrement={() => onDecrement(product.id)}
//                             onChange={(e) => onChange(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//
//     }
//
//     render() {
//         const {products} = this.props
//         return (
//             <div>
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
//                 {!products.length && <div>Go to shopping</div>}
//                 {this.renderProduct()}
//             </div>
//         )
//     }
// }
//
// export default ProductList1;

//ایجاد کانتکست Products

// import React from "react";
// import Product from "./Product1";
// import {useProducts, useProductsAction} from "../Providers/ProductsProvider";
//
// const ProductList1 = ({props}) => {
//     const products = useProducts();
//     const {removeHandler,incrementHandler,decrementHandler,changeHandler} = useProductsAction();
//
//     const renderProduct = () => {
//         if (products.length === 0) return <div>There is no product in cart</div>
//         return (
//             <div>
//                 {products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => removeHandler(product.id)}
//                             onIncrement={() => incrementHandler(product.id)}
//                             onDecrement={() => decrementHandler(product.id)}
//                             onChange={(e) => changeHandler(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//
//     }
//
//
//         return (
//             <div>
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
//                 {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
//                 {!products.length && <div>Go to shopping</div>}
//                 {renderProduct()}
//             </div>
//         )
// }
//
// export default ProductList1;


//مدیریت اکشن ها با useReducer

import React from "react";
import Product from "./Product1";
import {useProducts, useProductsAction} from "../Providers/ProductsProvider";

const ProductList1 = ({props}) => {
    const products = useProducts();
    const dispatch = useProductsAction();

    const renderProduct = () => {
        if (products.length === 0) return <div>There is no product in cart</div>
        return (
            <div>
                {products.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            product={product}
                            onDelete={() => dispatch({type : "remove" , id : product.id})}
                            onIncrement={() => dispatch({type : "increment" , id : product.id})}
                            onDecrement={() => dispatch({type : "decrement" , id : product.id})}
                            onChange={(e) => dispatch({type : "edit" , id : product.id , event : e})}
                        />
                    )
                })}
            </div>
        )

    }


    return (
        <div>
            {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
            {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
            {!products.length && <div>Go to shopping</div>}
            {renderProduct()}
        </div>
    )
}

export default ProductList1;