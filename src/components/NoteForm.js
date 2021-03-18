import React, {useState} from 'react'

const NoteForm = (props) => {
    const {formSubmit} = props
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title: title,
            body: body
        }
        formSubmit(formData)
        
        setTitle('')
        setBody('')
    }
    return (
        <div className = 'mt-3'>
            <form onSubmit = {handleSubmit}>
                <input className = "form-control" type = "text" value = {title} onChange = {handleTitleChange} placeholder = "Note Title"/>
                <br/>
                <textarea className = "form-control" type = "text" value = {body} onChange = {handleBodyChange} placeholder = "Note"/>
                <br/>
                <input className = "form-control" type = "submit" value = "save"/>
            </form>
        </div>
    )
    
}
export default NoteForm