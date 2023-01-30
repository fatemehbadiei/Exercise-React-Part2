//نوشتن کد بالا با استفاده از کلاس ها

// import React , {Component} from "react";
//
// class ClassCounter extends Component{
//
//     state = {
//         count : 0
//     }
//
//     addOneHandler = () =>{
//         // this.setState({count: this.state.count + 1});
//         this.setState((prevState)=>{
//             return{count : prevState.count +1}
//         })
//     }
//
//     render() {
//         return(
//           <div>
//               <h2>Count - {this.state.count}</h2>
//               <button onClick={this.addOneHandler}>Add One</button>
//           </div>
//         )
//     }
// }
//
// export default ClassCounter;

//bind this

// import React , {Component} from "react";
//
// class ClassCounter extends Component{
//
//     state = {
//         count : 0
//     }
//
//     constructor(props) {
//         super(props);
//         this.countHandler = this.countHandler.bind(this);
//     }
//
//     countHandler () {
//         //way 1
//         this.setState({count: this.state.count + 1});
//
//         //way 2 with callback
//         // this.setState((prevState)=>{
//         //     return{count : prevState.count +1}
//         // })
//     }
//
//     render() {
//         return(
//             <div>
//                 <h2>Count - {this.state.count}</h2>
//                 <button onClick={this.countHandler}>Add One</button>
//             </div>
//         )
//     }
// }
//
// export default ClassCounter;


//pass argument to event

// import React , {Component} from "react";
//
// class ClassCounter extends Component{
//
//     state = {
//         count : 0
//     }
//
//     constructor(props) {
//         super(props);
//         this.countHandler = this.countHandler.bind(this);
//     }
//
//     countHandler (id) {
//         console.log(id)
//         //way 1
//         this.setState({count: this.state.count + 1});
//
//         //way 2 with callback
//         // this.setState((prevState)=>{
//         //     return{count : prevState.count +1}
//         // })
//     }
//
//     render() {
//         return(
//             <div>
//                 <h2>Count - {this.state.count}</h2>
//                 <button onClick={this.countHandler.bind(this,2)}>Add One</button>
//             </div>
//         )
//     }
// }
//
// export default ClassCounter;


// import React , {Component} from "react";
//
// class ClassCounter extends Component{
//
//     state = {
//         count : 0
//     }
//
//     constructor(props) {
//         super(props);
//         this.countHandler = this.countHandler.bind(this);
//     }
//
//     countHandler (id) {
//         console.log(id)
//         //way 1
//         this.setState({count: this.state.count + 1});
//
//         //way 2 with callback
//         // this.setState((prevState)=>{
//         //     return{count : prevState.count +1}
//         // })
//     }
//
//     render() {
//         return(
//             <div>
//                 <h2>Count - {this.state.count}</h2>
//                 <button onClick={()=>this.countHandler(2)}>Add One</button>
//             </div>
//         )
//     }
// }
//
// export default ClassCounter;


//useEffect in component update

import React , {Component} from "react";

class ClassCounter extends Component{

    state = {
        name : "",
        count : 0
    }
    componentDidMount() {
        document.title = `clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.count !== this.state.count){
            document.title = `clicked ${this.state.count} times`
        }
    }

    countHandler = () => {
        //way 1
        this.setState({count: this.state.count + 1});

        //way 2 with callback
        // this.setState((prevState)=>{
        //     return{count : prevState.count +1}
        // })
    }

    render() {
        return(
            <div>
                <input type="text" onChange={(e)=>this.setState({name:e.target.value})}/>
                <button onClick={this.countHandler}>Count - {this.state.count}</button>
                <br/>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

export default ClassCounter;