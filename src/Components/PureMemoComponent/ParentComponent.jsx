// //pure component
//
// import {Component} from "react";
// import PureComp from "./PureComponent";
// import RegComp from "./RegComponent";
//
// class ParentComponent extends Component{
//
//     state={
//         name : "Fatemeh"
//     }
//
//     componentDidMount() {
//         setInterval(()=>{
//             this.setState({name:"Fatemeh"});
//         },1000)
//     }
//
//     render() {
//        console.log("parent...")
//        return(
//            <div>
//                Parent Component
//                <PureComp name={this.state.name}/>
//                <RegComp name={this.state.name}/>
//            </div>
//        )
//    }
// }
//
// export default ParentComponent;


//memo component

import {Component} from "react";
import RegComp from "./RegComponent";
import MemoComponent from "./MemoComponent";

class ParentComponent extends Component{

    state={
        name : "Fatemeh"
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({name:"Fatemeh"});
        },1000)
    }

    render() {
        console.log("parent...")
        return(
            <div>
                Parent Component
                <MemoComponent name={this.state.name}/>
                <RegComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent;