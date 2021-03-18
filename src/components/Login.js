import React, {useState} from 'react'
import axios from 'axios'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

        const runValidations = () => {

        if(email.trim().length === 0){
            errors.email = "email cannot be blank"
        }

        if(password.trim().length === 0){
            errors.password = "password cannot be blank"
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()
            if(Object.keys(errors).length===0){
                setFormErrors({})
        const formData = {
            email: email,
            password: password 
        }
        axios.post('https://dct-user-auth.herokuapp.com/users/login', formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){//Object.keys(result).includes('errors)
                alert(result.errors)
            }else{
                alert("sussessfully logged in")
                localStorage.setItem('token', result.token)
                props.history.push("/")
                props.handleAuth()
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
        setEmail('')
        setPassword('')
    }else{
        console.log(errors)
        setFormErrors(errors)
    }
}
    return (
        <div className = "mt-3">
            <div><h1>Login</h1></div>
        <form style = {{width: "50%"}} onSubmit = {handleSubmit}>
            <input className = "form-control" type = "email" value = {email} onChange = {handleEmailChange} placeholder = "enter email" name = "email"/>
            {formErrors.email && <span style = {{color:"red", marginLeft:"3px"}}>{formErrors.email}</span>}
            <br/>
            <input className = "form-control" type = "text" value = {password} onChange = {handlePasswordChange} placeholder = "enter password" name = "password"/>
            {formErrors.password && <span style = {{color:"red", marginLeft:"3px"}}>{formErrors.password}</span>}
            <br/>
            <input className = "mb-3 btn btn-success form-control" type = "submit"/><br/>
        </form>
        </div>
    )
}
export default Login