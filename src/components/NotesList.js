import React from 'react'
import NoteItem from './NoteItem'
const NotesList = (props) => {
    const {notes, removeItem} = props
    return (
        <div className = "bg">
            {notes.length === 0 ? (
            <div className = "bg">
                <h2>No Notes found</h2>
                <p>Add your first Note</p>
            </div>
        ) : (
            <div>
                <h2>My Notes - {notes.length}</h2>
                {notes.map((note)=>{
                    return(
                        <NoteItem key = {note._id} {...note} removeItem = {removeItem}/>
                    )
                })}
            </div>
        )}   
        </div>
    )
}
export default NotesList