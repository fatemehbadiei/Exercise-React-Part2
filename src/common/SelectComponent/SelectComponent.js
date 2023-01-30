//استخراج کامپوننت search

// import styles from "./Select.module.css";
// import Select from "react-select";
//
//
// const SelectComponent = ({onChange , value , options , title}) => {
//   return(
//       <div className={styles.selectContainer}>
//           <span>{title}</span>
//           <Select onChange={onChange} value={value} options={options} className={styles.select}/>
//       </div>
//   )
// }
//
// export default SelectComponent;


//استفاده از rest operators در props


import styles from "./Select.module.css";
import Select from "react-select";


const SelectComponent = ({title , ...rest}) => {
    console.log(rest)
    return(
        <div className={styles.selectContainer}>
            <span>{title}</span>
            <Select {...rest} className={styles.select}/>
        </div>
    )
}

export default SelectComponent;