// import styles from "./Navbar.module.css";
// const Navbar = (props) => {
//   return(
//       <header className={styles.navbar}>
//           <h2>shopping</h2>
//           <span>{props.totalProduct}</span>
//       </header>
//   )
// }
//
// export default Navbar;


//object destructuring

// import styles from "./Navbar.module.css";
// const Navbar = ({totalProduct}) => {
//     return(
//         <header className={styles.navbar}>
//             <h2>shopping</h2>
//             <span>{totalProduct}</span>
//         </header>
//     )
// }
//
// export default Navbar;


//ایجاد کانتکست Products

import styles from "./Navbar.module.css";
import {useProducts} from "../Providers/ProductsProvider";
const Navbar = () => {
    const products = useProducts();
    const totalProduct = products.filter((p) => p.quantity > 0).length;
    return(
        <header className={styles.navbar}>
            <h2>shopping</h2>
            <span>{totalProduct}</span>
        </header>
    )
}

export default Navbar;