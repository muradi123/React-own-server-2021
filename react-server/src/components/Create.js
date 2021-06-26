import React, { useState } from 'react'
import axios from 'axios'
const Create = () => {
    const [title, setTitle]  = useState('');
    const [body, setBody]  = useState('');
    const [id, setId]  = useState('');
    const submitEvent =  (e) => {
      e.preventDefault()
      let id = Math.floor(Math.random() * 100)
      const blog = {id, title, body }
      console.log(blog)
      console.log(id)

         axios.post(
          `http://localhost:5000/blogs/`, blog
          )
        .then((res) => {
          setTitle('')
          setBody('')
          setId('')
          alert('blog Aded')
        })
        .catch(err => console.log(err))
      }
    
    return (
        <div className="form_div">
           <form onSubmit={submitEvent}>
             <label>
             <b>
              TITLE
             </b>
             <input type="text" name="name" className="title" required value={title} onChange={(e) => {
               setTitle(e.target.value)
             }}/>
             </label>
             <label>
             <b>
              BODY
             </b>
             <textarea type="text" name="name" className="text" required value= {body} onChange={(e) => {
               setBody(e.target.value)
             }}/>
             </label>
             <input type="submit" value="Submit" className="submit_form"/>
           </form>
        </div>
    )
}

export default Create
