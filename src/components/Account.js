import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Account = (props) => {
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get('https://dct-user-auth.herokuapp.com/users/account', {
            headers:{
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            setUser(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    return (
        <div>
            <h1>User Account</h1>
            <p>User Name - {user.username}</p>
            <p>Email - {user.email}</p>
        </div>
    )
}
export default Account