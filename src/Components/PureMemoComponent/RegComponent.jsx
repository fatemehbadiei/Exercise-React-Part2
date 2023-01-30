// //pure component
//
// import {Component} from "react";
//
// class RegComp extends Component{
//     render() {
//         console.log("reg...")
//         return(
//             <div>
//                 Reg Component - {this.props.name}
//             </div>
//         )
//     }
// }
//
// export default RegComp;


//memo component

import {Component} from "react";

class RegComp extends Component{
    render() {
        console.log("reg...")
        return(
            <div>
                Reg Component - {this.props.name}
            </div>
        )
    }
}

export default RegComp;