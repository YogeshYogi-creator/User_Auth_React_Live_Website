import React from 'react'
import axios from 'axios'
const NoteItem = (props) => {
    const {_id, title, body, removeItem} = props

    const handleRemove = () =>{

        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove){
            axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${_id}`, {  
                headers:{
                    "x-auth": localStorage.getItem("token")
                }
            })
            .then((response)=>{
                const result = response.data
                removeItem(result._id)
            })
            .catch((err)=>{
                alert(err.message)
            })
        }
    }
    return(
        <div className = 'bg card bg-warning mt-3 mb-3' style = {{textAlign: 'left'}}>
            <div className = 'bg card-body'>
                <h3 classsName = 'bg card-title'>{title}</h3>
                <hr/>
                <p className = 'bg card-text'>{body}</p>
                <img onClick = {handleRemove} src="https://img.icons8.com/fluent/48/000000/minus.png"/>
            </div>
        </div>
    )
}
export default NoteItem