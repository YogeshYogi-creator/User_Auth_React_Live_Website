import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NotesList from './NotesList'
import AddNote from './AddNote'
const NotesContainer = (props) => {
    const [notes, setNotes] = useState([])
    
    useEffect(()=>{
        axios.get('https://dct-user-auth.herokuapp.com/api/notes', {
            headers:{
                "x-auth" : localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const result = response.data
            console.log(result)
            setNotes(result)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[])
    const addItem = (note) => {
        setNotes([...notes, note])
    }
    const removeItem = (_id) => {
        const result = notes.filter((note)=>{
            return note._id !== _id 
        })
        setNotes(result)
    }
    return (
        <div className = "row">
            <div className = "mt-5 col-md-6">
            <NotesList notes = {notes} removeItem = {removeItem}/>
            </div>
            <div className = "mt-5 col-md-6">
            <AddNote addItme = {addItem}/>
            </div>
        </div>
    )
}
export default NotesContainer