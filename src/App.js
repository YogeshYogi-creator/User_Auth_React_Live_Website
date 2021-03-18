import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
const App = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn)
  }

  useEffect(()=>{
    if(localStorage.getItem("token")){
      handleAuth()
    }
  }, [])
  return (
    <div className = 'container'>
      <h1 className = 'display-4'>User Auth</h1>
      <div>
        <center>    
        <Navbar userLoggedIn = {userLoggedIn} handleAuth = {handleAuth}/>  
        </center>
      </div>
    </div>
  )
}
export default App