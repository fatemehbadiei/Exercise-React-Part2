//آپدیت state از نوع object

import React, {useState} from "react";

const HookObject = () => {

    const [user, setUser] = useState({firstName: "", lastName: ""});

    const changeHandler = (e) => {
        setUser({...user, firstName: e.target.value});
    }

    const lastNameHandler = (e) => {
        setUser({...user , lastName: e.target.value});
    }

    return (
        <div>
            FirstName :
            <input type="text" onChange={changeHandler} value={user.firstName}/>
            LastName :
            <input type="text" onChange={lastNameHandler} value={user.lastName}/>
            <h2>My name is {user.firstName}</h2>
            <h2>My family is {user.lastName}</h2>
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}

export default HookObject;