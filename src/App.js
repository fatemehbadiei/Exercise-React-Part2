import "./App.css"
//مفهوم props در react

// import React from "react";
// import Product from "./Components/ProductList/Product";

// const App = () => {
//   return(
//       <div className="container" id="title">
//           <h1>Shopping App</h1>
//           <Product name="React.js" price="$99"/>
//           <Product name="Node.js" price="$89"/>
//           <Product name="Javascript.js" price="$98">
//               <p>discount is 15%</p>
//           </Product>
//       </div>
//   )
// }
// export default App;

//روش دوم با استفاده از state

// import React, {Component} from "react";
// import Product from "./Components/ProductList/Product";
//
// class App extends Component{
//     state={
//        products:[
//            {title:"React.js" , price:"89$"},
//            {title:"Node.js" , price:"99$"},
//            {title:"Javascript.js" , price:"98$"},
//        ]
//     }
//     render() {
//         return(
//             <div className="container" id="title">
//                 <h1>Shopping App</h1>
//                 {this.state.products.map((product)=>{
//                     return(<Product key={product.title} name={product.title} price={product.price}/>)
//                 })}
//             </div>
//         )
//     }
// }
//
// export default App;

//آپدیت state با استفاده از callback
// import React from "react";
// import HookCounter from "./Components/HookCounter";
//
// function App() {
//     return(
//        <div className="App">
//            <HookCounter/>
//        </div>
//     )
// }
//
// export default App;

//نوشتن کد بالا با استفاده از کلاس ها
// import React from "react";
// import ClassCounter from "./Components/ClassCounter";
//
// function App() {
//     return(
//         <div className="App">
//             <ClassCounter/>
//         </div>
//     )
// }
//
// export default App;

//آپدیت state از نوع object

// import React from "react";
// import HookObject from "./Components/HookObject";
//
// function App() {
//     return(
//         <div className="App">
//             <HookObject/>
//         </div>
//     )
// }
//
// export default App;


//آپدیت state از نوع Array
//
// import React from "react";
// import HookArray from "./Components/HookArray";
//
// function App() {
//     return(
//         <div className="App">
//             <HookArray/>
//         </div>
//     )
// }
//
// export default App;

//bind this

// import React from "react";
// import ClassCounter from "./Components/ClassCounter";
//
// function App() {
//     return(
//         <div className="App">
//             <ClassCounter/>
//         </div>
//     )
// }
//
// export default App;


//pass function as props

// import React, {Component} from "react";
// import Product from "./Components/ProductList/Product";
//
// class App extends Component{
//     state={
//        products:[
//            {title:"React.js" , price:"89$"},
//            {title:"Node.js" , price:"99$"},
//            {title:"Javascript.js" , price:"98$"},
//        ]
//     }
//
//     clickHandler = () =>{
//         console.log("clicked")
//     }
//     render() {
//         return(
//             <div className="container" id="title">
//                 <h1>Shopping App</h1>
//                 {this.state.products.map((product)=>{
//                     return(<Product key={product.title} name={product.title} price={product.price} click={this.clickHandler}/>)
//                 })}
//             </div>
//         )
//     }
// }
//
// export default App;

//extract productList component

// import React, {Component} from "react";
// import ProductList from "./Components/ProductList/ProductList";
//
// class App extends Component{
//
//     render() {
//         return(
//             <div className="container" id="title">
//                 <h1>Shopping App</h1>
//                 <ProductList/>
//             </div>
//         )
//     }
// }
//
// export default App;


//lifting state up

// import React, {Component} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
//
// class App extends Component{
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
//         return(
//             <div className="container" id="title">
//                 <h1>Shopping App</h1>
//                 <Navbar totalProduct = {this.state.products.filter((p)=> p.quantity > 0).length}/>
//                 <ProductList1
//                     products={this.state.products}
//                     onDelete={this.removeHandler}
//                     onIncrement={this.incrementHandler}
//                     onDecrement={this.decrementHandler}
//                     onChange={this.changeHandler}
//                 />
//             </div>
//         )
//     }
// }
//
// export default App;


//check CDU method in update setState

// import React, {Component} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
//
// class App extends Component{
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
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.quantity++
//         // this.setState({products});
//
//         //way2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.quantity++
//         const products = [...this.state.products];
//         products[index] = product
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // if (selectedProduct.quantity === 1) {
//         //     const filteredProducts = products.filter((p) => p.id !== id);
//         //     this.setState({products: filteredProducts})
//         // } else {
//         //     selectedProduct.quantity--
//         //     this.setState({products});
//         // }
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         if (product.quantity === 1){
//             const filteredProduct = this.state.products.filter((p) => p.id !== id);
//             this.setState({products: filteredProduct})
//         }else{
//             const products = [...this.state.products];
//             product.quantity --
//             products[index] = product
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.title = event.target.value;
//         // this.setState({products})
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.title = event.target.value;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products});
//     }
//
//     render() {
//         return(
//             <div className="container" id="title">
//                 <h1>Shopping App</h1>
//                 <Navbar totalProduct = {this.state.products.filter((p)=> p.quantity > 0).length}/>
//                 <ProductList1
//                     products={this.state.products}
//                     onDelete={this.removeHandler}
//                     onIncrement={this.incrementHandler}
//                     onDecrement={this.decrementHandler}
//                     onChange={this.changeHandler}
//                 />
//             </div>
//         )
//     }
// }
//
// export default App;


//useEffect in component update


// import React, {Component} from "react";
// import ClassCounter from "./Components/ClassCounter";
//
// class App extends Component{
//     render() {
//         return(
//             <div className="container" id="title">
//                 <ClassCounter/>
//             </div>
//         )
//     }
// }
//
// export default App;


// import React, {Component} from "react";
// import FunctionalCounter from "./Components/FunctionalCounter";
//
// class App extends Component{
//     render() {
//         return(
//             <div className="container" id="title">
//                 <FunctionalCounter/>
//             </div>
//         )
//     }
// }
//
// export default App;


//clean-up concept

// import React, {Component} from "react";
// import ClassTimer from "./Components/ClassTimer";
//
// class App extends Component {
//
//     state = {
//         isShow: true,
//     }
//
//     render() {
//         return (
//             <div className="container" id="title">
//                <button onClick={()=>this.setState({isShow : !this.state.isShow})}>{this.state.isShow ? "Hide" : "Show"}</button>
//                 {this.state.isShow && <ClassTimer/>}
//             </div>
//         )
//     }
// }
//
// export default App;

//write this code with functional component


// import React, {Component} from "react";
// import FunctionalTimer from "./Components/FunctionalTimer";
//
// class App extends Component {
//
//     state = {
//         isShow: true,
//     }
//
//     render() {
//         return (
//             <div className="container" id="title">
//                 <button onClick={()=>this.setState({isShow : !this.state.isShow})}>{this.state.isShow ? "Hide" : "Show"}</button>
//                 {this.state.isShow && <FunctionalTimer/>}
//             </div>
//         )
//     }
// }
//
// export default App;


//Higher order component


// import React, {Component} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
//
// class App extends Component{
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
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.quantity++
//         // this.setState({products});
//
//         //way2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.quantity++
//         const products = [...this.state.products];
//         products[index] = product
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // if (selectedProduct.quantity === 1) {
//         //     const filteredProducts = products.filter((p) => p.id !== id);
//         //     this.setState({products: filteredProducts})
//         // } else {
//         //     selectedProduct.quantity--
//         //     this.setState({products});
//         // }
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         if (product.quantity === 1){
//             const filteredProduct = this.state.products.filter((p) => p.id !== id);
//             this.setState({products: filteredProduct})
//         }else{
//             const products = [...this.state.products];
//             product.quantity --
//             products[index] = product
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.title = event.target.value;
//         // this.setState({products})
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.title = event.target.value;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products});
//     }
//
//     render() {
//         return(
//             <Wrapper class="container">
//                 <Navbar totalProduct = {this.state.products.filter((p)=> p.quantity > 0).length}/>
//                 <ProductList1
//                     products={this.state.products}
//                     onDelete={this.removeHandler}
//                     onIncrement={this.incrementHandler}
//                     onDecrement={this.decrementHandler}
//                     onChange={this.changeHandler}
//                 />
//             </Wrapper>
//         )
//     }
// }
//
// export default App;

//an example of HOC

// import React, {Component} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
//
// class App extends Component{
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
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.quantity++
//         // this.setState({products});
//
//         //way2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.quantity++
//         const products = [...this.state.products];
//         products[index] = product
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // if (selectedProduct.quantity === 1) {
//         //     const filteredProducts = products.filter((p) => p.id !== id);
//         //     this.setState({products: filteredProducts})
//         // } else {
//         //     selectedProduct.quantity--
//         //     this.setState({products});
//         // }
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         if (product.quantity === 1){
//             const filteredProduct = this.state.products.filter((p) => p.id !== id);
//             this.setState({products: filteredProduct})
//         }else{
//             const products = [...this.state.products];
//             product.quantity --
//             products[index] = product
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.title = event.target.value;
//         // this.setState({products})
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.title = event.target.value;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products});
//     }
//
//     render() {
//         console.log(this.props)
//         return(
//             <>
//                 <Navbar totalProduct = {this.state.products.filter((p)=> p.quantity > 0).length}/>
//                 <ProductList1
//                     products={this.state.products}
//                     onDelete={this.removeHandler}
//                     onIncrement={this.incrementHandler}
//                     onDecrement={this.decrementHandler}
//                     onChange={this.changeHandler}
//                 />
//             </>
//         )
//     }
// }
//
// export default Wrapper(App,"container");


//a good example of hoc

// import React, {Component} from "react";
// import ClickCounter from "./Components/HOCExample/ClickCounter";
// import HoverCounter from "./Components/HOCExample/HoverCounter";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                <ClickCounter name="Fatemeh"/>
//                <HoverCounter/>
//             </>
//         )
//     }
// }
//
// export default App;


//pure component

// import React, {Component} from "react";
// // import ParentComponent from "./Components/PureMemoComponent/ParentComponent";
// //
// // class App extends Component {
// //
// //     render() {
// //         return (
// //             <>
// //                 <ParentComponent/>
// //             </>
// //         )
// //     }
// // }
// //
// // export default App;

//memo component

// import React, {Component} from "react";
// import ParentComponent from "./Components/PureMemoComponent/ParentComponent";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <ParentComponent/>
//             </>
//         )
//     }
// }
//
// export default App;


// //ref in class component
//
// import React, {Component} from "react";
// import ClassRef from "./Components/Ref/ClassRef";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <ClassRef/>
//             </>
//         )
//     }
// }
//
// export default App;


//useRef hook

// import React, {Component} from "react";
// import FunctionalRef from "./Components/Ref/FunctionalRef";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <FunctionalRef/>
//             </>
//         )
//     }
// }
//
// export default App;


//store previous state with useRef

// import React, {Component} from "react";
// import UseRefExample from "./Components/Ref/UseRef";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <UseRefExample/>
//             </>
//         )
//     }
// }
//
// export default App;


//context in react


// import React, {Component} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
//
// export const userContext = React.createContext();
// export const websiteContext = React.createContext();
//
// class App extends Component{
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
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.quantity++
//         // this.setState({products});
//
//         //way2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.quantity++
//         const products = [...this.state.products];
//         products[index] = product
//         this.setState({products});
//     }
//
//     decrementHandler = (id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // if (selectedProduct.quantity === 1) {
//         //     const filteredProducts = products.filter((p) => p.id !== id);
//         //     this.setState({products: filteredProducts})
//         // } else {
//         //     selectedProduct.quantity--
//         //     this.setState({products});
//         // }
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         if (product.quantity === 1){
//             const filteredProduct = this.state.products.filter((p) => p.id !== id);
//             this.setState({products: filteredProduct})
//         }else{
//             const products = [...this.state.products];
//             product.quantity --
//             products[index] = product
//             this.setState({products});
//         }
//
//     }
//
//     changeHandler = (event, id) => {
//         //way 1 that muted component and state
//         // const products = [...this.state.products];
//         // const selectedProduct = products.find((p) => p.id === id);
//         // selectedProduct.title = event.target.value;
//         // this.setState({products})
//
//         //way 2
//         const index = this.state.products.findIndex((item) => item.id === id);
//         const product = {...this.state.products[index]};
//         product.title = event.target.value;
//         const products = [...this.state.products];
//         products[index] = product;
//         this.setState({products});
//     }
//
//     render() {
//         // console.log(this.props)
//         return(
//             <websiteContext.Provider value={"fatemeh.ir"}>
//                <userContext.Provider value={"fatemeh"}>
//                    <Navbar totalProduct = {this.state.products.filter((p)=> p.quantity > 0).length}/>
//                    <ProductList1
//                        products={this.state.products}
//                        onDelete={this.removeHandler}
//                        onIncrement={this.incrementHandler}
//                        onDecrement={this.decrementHandler}
//                        onChange={this.changeHandler}
//                    />
//                </userContext.Provider>
//             </websiteContext.Provider>
//         )
//     }
// }
//
// export default Wrapper(App,"container");


//an example of context

// import React, {Component} from "react";
// import CounterProvider from "./Components/Context/CounterProvider";
// import CounterOne from "./Components/Context/CounterOne";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <CounterProvider>
//                     <p>Welcome to context</p>
//                     <CounterOne/>
//                 </CounterProvider>
//             </>
//         )
//     }
// }
//
//
// export default App;

//مثال کاربردی از useReducer

// import React, {Component} from "react";
// import CountReducer from "./Components/Reducer/CountReducer";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <CountReducer/>
//             </>
//         )
//     }
// }
//
// export default App;


//useContext and useReducer

// import React, {Component} from "react";
// import CounterProvider from "./Components/Context/CounterProvider";
// import CounterOne from "./Components/Context/CounterOne";
//
// class App extends Component {
//
//     render() {
//         return (
//             <>
//                 <CounterProvider>
//                     <p>Welcome to context</p>
//                     <CounterOne/>
//                 </CounterProvider>
//             </>
//         )
//     }
// }
//
//
// export default App;


//تبدیل app به فانکشنال کامپوننت


// import React, {useState} from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
//
// const App = () => {
//
//     const [products, setProducts] = useState([
//         {id: 1, title: "React.js", price: "89$", quantity: 1},
//         {id: 2, title: "Node.js", price: "99$", quantity: 2},
//         {id: 3, title: "Javascript.js", price: "98$", quantity: 3},
//     ])
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
//
//     return (
//         <>
//             <Navbar totalProduct={products.filter((p) => p.quantity > 0).length}/>
//             <ProductList1
//                 products={products}
//                 onDelete={removeHandler}
//                 onIncrement={incrementHandler}
//                 onDecrement={decrementHandler}
//                 onChange={changeHandler}
//             />
//         </>
//     )
// }
//
// export default Wrapper(App, "container");


// //ایجاد کانتکست Products
//
//
// import React from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
// import ProductsProvider from "./Components/Providers/ProductsProvider";
//
// const App = () => {
//     return (
//         <ProductsProvider>
//             <Navbar/>
//             <ProductList1/>
//         </ProductsProvider>
//     )
// }
//
// export default Wrapper(App, "container");


// //ایجاد کامپوننت Filter
//
//
// import React from "react";
// import ProductList1 from "./Components/ProductList1/ProductList1";
// import Navbar from "./Components/Navbar/Navbar";
// import Wrapper from "./Components/HOC/Wrapper";
// import ProductsProvider from "./Components/Providers/ProductsProvider";
// import Filter from "./Components/Filter/Filter";
// import SearchBar from "./common/Search/Search";
//
// const App = () => {
//     return (
//         <ProductsProvider>
//             <Navbar/>
//             <SearchBar/>
//             <Filter/>
//             <ProductList1/>
//         </ProductsProvider>
//     )
// }
//
// export default Wrapper(App, "container");


//سرچ کردن بر اساس فیلتر


import React from "react";
import ProductList1 from "./Components/ProductList1/ProductList1";
import Navbar from "./Components/Navbar/Navbar";
import Wrapper from "./Components/HOC/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Filter from "./Components/Filter/Filter";


const App = () => {
    return (
        <ProductsProvider>
            <Navbar/>
            <Filter/>
            <ProductList1/>
        </ProductsProvider>
    )
}

export default Wrapper(App, "container");