import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import NotesContainer from './NotesContainer'
const Navbar = (props) => {
    const {userLoggedIn, handleAuth} = props
    return(
        <div className="mt-3">
            
                {userLoggedIn ? (
                    <React.Fragment>
                        <Link to = "/account">Account</Link><b> | </b>
                        <Link to = "/notesContainer">Note's</Link><b> | </b>
                            <Link to = "/logout"onClick = {()=>{
                                localStorage.removeItem("token")
                                alert('Logout Successful')
                                handleAuth()
                                props.history.push('/')
                            }}>Logout</Link>
                        
                        
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link to = "/">Home</Link><b> | </b>
                        <Link to = "/register">Register</Link><b> | </b>
                        <Link to = "/login">Login</Link>
                    </React.Fragment>
                )}
        

      <Route path = "/" component = {Home} exact = {true}/>
      <Route path = "/register" component = {Register}/>
      <Route path = "/login" render = {(props)=>{
          return <Login {...props} handleAuth={handleAuth}/>
      }}/>
      <Route path = "/account" component = {Account}/>
      <Route path = "/notesContainer" component = {NotesContainer}/>
      </div>
    )
}

export default withRouter(Navbar)