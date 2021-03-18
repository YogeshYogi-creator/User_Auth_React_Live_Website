import React from 'react'
import axios from 'axios'
import NoteForm from './NoteForm'
const AddNote = (props) => {
    const {addItem} = props
    const formSubmit = (note) => {
        axios.post('https://dct-user-auth.herokuapp.com/api/notes',note,{
            headers:{
                "x-auth": localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            addItem(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    return(
        <div>
            <h2>Add Note</h2>
            <NoteForm formSubmit = {formSubmit}/>
        </div>
    )
}
export default AddNote