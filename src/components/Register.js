import React, {useState} from 'react'
import axios from 'axios'
const Register = (props) => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleNameChange = (e) => {
        setUserName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const runValidations = () => {
        if(userName.trim().length === 0){
            errors.userName = "user name cannot be blank"
        }

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
                    username: userName,
                    email: email,
                    password: password
                }
                axios.post('https://dct-user-auth.herokuapp.com/users/register', formData)
                .then((response)=>{
                    const result = response.data
                    if(result.hasOwnProperty('errors')){
                        alert(result.message)
                    }else{
                        alert('successfully created user')
                        props.history.push('/login')
                    }
                })
                .catch((err)=>{
                    alert(err.message)
                })
                    setUserName('')
                    setEmail('')
                    setPassword('')
        }else{
            console.log(errors)
            setFormErrors(errors)
        }

    }

    return (
        <div className = "mt-3">
            <h2>Register</h2>
        <form style = {{width: '50%'}} onSubmit = {handleSubmit}>
            <input className = "form-control" type = 'text' value = {userName} onChange = {handleNameChange} placeholder = "user name" name = "username"/>
            {formErrors.userName && <span style = {{color:"red", marginLeft:"3px"}}>{formErrors.userName}</span>}
            <br/>
            <input className = "form-control" type = 'email' value = {email} onChange = {handleEmailChange} placeholder = "email@gmail.com" name = "email"/>
            {formErrors.email && <span style = {{color:"red", marginLeft:"3px"}}>{formErrors.email}</span>}
            <br/>
            <input className = "form-control" type = 'text' value = {password} onChange = {handlePasswordChange} placeholder = "password" name = "password"/>
            {formErrors.password && <span style = {{color:"red", marginLeft:"3px"}}>{formErrors.password}</span>}
            <br/>
            <input className = " mb-3 btn btn-success form-control" type = "submit"/><br/>
        </form>
        </div>
    )
}
export default Register