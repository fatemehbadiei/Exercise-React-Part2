//extract productList component
//
// import React, {Component} from "react";
// import Product from "./Product";
//
// class ProductList extends Component {
//     state = {
//         products: [
//             {id: 1 ,title: "React.js", price: "89$"},
//             {id: 2 ,title: "Node.js", price: "99$"},
//             {id: 3 ,title: "Javascript.js", price: "98$"},
//         ]
//     }
//
//     removeHandler = (id) =>{
//         const filteredProducts = this.state.products.filter((p) => p.id !== id);
//         this.setState({products : filteredProducts})
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.products.map((product,index) => {
//                     return (
//                         <Product
//                             key={index}
//                             name={product.title}
//                             price={product.price}
//                             onDelete={()=>this.removeHandler(product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// export default ProductList;


//style increment btn

// import React, {Component} from "react";
// import Product from "./Product";
//
// class ProductList extends Component {
//     state = {
//         products: [
//             {id: 1, title: "React.js", price: "89$", quantity: 1},
//             {id: 2, title: "Node.js", price: "99$", quantity: 2},
//             {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//         ]
//     }
//
//     removeHandler = (id) => {
//         const filteredProducts = this.state.products.filter((p) => p.id !== id);
//         this.setState({products: filteredProducts})
//     }
//
//     incrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.quantity++
//         this.setState({products});
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => this.removeHandler(product.id)}
//                             onIncrement={() => this.incrementHandler(product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// export default ProductList;


// //controlled component
//
// import React, {Component} from "react";
// import Product from "./Product";
//
// class ProductList extends Component {
//     state = {
//         products: [
//             {id: 1, title: "React.js", price: "89$", quantity: 1},
//             {id: 2, title: "Node.js", price: "99$", quantity: 2},
//             {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//         ]
//     }
//
//     removeHandler = (id) => {
//         const filteredProducts = this.state.products.filter((p) => p.id !== id);
//         this.setState({products: filteredProducts})
//     }
//
//     incrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.quantity++
//         this.setState({products});
//     }
//
//     changeHandler = (event,id) =>{
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.title = event.target.value;
//         this.setState({products})
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => this.removeHandler(product.id)}
//                             onIncrement={() => this.incrementHandler(product.id)}
//                             onChange = {(e) => this.changeHandler(e,product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// export default ProductList;


// //decrement quantity
//
// import React, {Component} from "react";
// import Product from "./Product";
//
// class ProductList extends Component {
//     state = {
//         products: [
//             {id: 1, title: "React.js", price: "89$", quantity: 1},
//             {id: 2, title: "Node.js", price: "99$", quantity: 2},
//             {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//         ]
//     }
//
//     removeHandler = (id) => {
//         const filteredProducts = this.state.products.filter((p) => p.id !== id);
//         this.setState({products: filteredProducts})
//     }
//
//     incrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.quantity++
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         if (selectedProduct.quantity === 1) {
//             const filteredProducts = products.filter((p) => p.id !== id);
//             this.setState({products: filteredProducts})
//         } else {
//             selectedProduct.quantity--
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.title = event.target.value;
//         this.setState({products})
//     }
//
//     render() {
//         return (
//             <div>
//                 {this.state.products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => this.removeHandler(product.id)}
//                             onIncrement={() => this.incrementHandler(product.id)}
//                             onDecrement={() => this.decrementHandler(product.id)}
//                             onChange={(e) => this.changeHandler(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// export default ProductList;


// //conditional rendering
//
// import React, {Component} from "react";
// import Product from "./Product";
//
// class ProductList extends Component {
//     state = {
//         products: [
//             {id: 1, title: "React.js", price: "89$", quantity: 1},
//             {id: 2, title: "Node.js", price: "99$", quantity: 2},
//             {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//         ]
//     }
//
//     removeHandler = (id) => {
//         const filteredProducts = this.state.products.filter((p) => p.id !== id);
//         this.setState({products: filteredProducts})
//     }
//
//     incrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.quantity++
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         if (selectedProduct.quantity === 1) {
//             const filteredProducts = products.filter((p) => p.id !== id);
//             this.setState({products: filteredProducts})
//         } else {
//             selectedProduct.quantity--
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         const products = [...this.state.products];
//         const selectedProduct = products.find((p) => p.id === id);
//         selectedProduct.title = event.target.value;
//         this.setState({products})
//     }
//
//     render() {
//         if(this.state.products.length === 0){
//             return <div>There is no product in cart</div>
//         }
//         return (
//             <div>
//                 {this.state.products.map((product, index) => {
//                     return (
//                         <Product
//                             key={index}
//                             product={product}
//                             onDelete={() => this.removeHandler(product.id)}
//                             onIncrement={() => this.incrementHandler(product.id)}
//                             onDecrement={() => this.decrementHandler(product.id)}
//                             onChange={(e) => this.changeHandler(e, product.id)}
//                         />
//                     )
//                 })}
//             </div>
//         )
//     }
// }
//
// export default ProductList;


//conditional rendering way 2

import React, {Component} from "react";
import Product from "./Product";

class ProductList extends Component {
    state = {
        products: [
            {id: 1, title: "React.js", price: "89$", quantity: 1},
            {id: 2, title: "Node.js", price: "99$", quantity: 2},
            {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
        ]
    }

    removeHandler = (id) => {
        const filteredProducts = this.state.products.filter((p) => p.id !== id);
        this.setState({products: filteredProducts})
    }

    incrementHandler = (id) => {
        const products = [...this.state.products];
        const selectedProduct = products.find((p) => p.id === id);
        selectedProduct.quantity++
        this.setState({products});
    }

    decrementHandler = (id) => {
        const products = [...this.state.products];
        const selectedProduct = products.find((p) => p.id === id);
        if (selectedProduct.quantity === 1) {
            const filteredProducts = products.filter((p) => p.id !== id);
            this.setState({products: filteredProducts})
        } else {
            selectedProduct.quantity--
            this.setState({products});
        }

    }

    changeHandler = (event, id) => {
        const products = [...this.state.products];
        const selectedProduct = products.find((p) => p.id === id);
        selectedProduct.title = event.target.value;
        this.setState({products})
    }

    renderProduct = () => {
        if (this.state.products.length === 0) return <div>There is no product in cart</div>
        return (
            <div>
                {this.state.products.map((product, index) => {
                    return (
                        <Product
                            key={index}
                            product={product}
                            onDelete={() => this.removeHandler(product.id)}
                            onIncrement={() => this.incrementHandler(product.id)}
                            onDecrement={() => this.decrementHandler(product.id)}
                            onChange={(e) => this.changeHandler(e, product.id)}
                        />
                    )
                })}
            </div>
        )

    }

    render() {
      return (
          <div>
              {/*{!this.state.products.length ? <div>Go to shopping</div> : <div>Welcome Back</div>}*/}
              {/*{!this.state.products.length ? <div>Go to shopping</div> : null}*/}
              {!this.state.products.length && <div>Go to shopping</div>}
              {this.renderProduct()}
          </div>
      )
    }
}

export default ProductList;