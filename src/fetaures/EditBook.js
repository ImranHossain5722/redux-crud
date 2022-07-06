import React, { useState } from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {updateBook} from './BooksSlice'
const EditBook = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [id, setId]= useState(location.state.id)
    const [title, setTitle ]= useState(location.state.title)
    const [author, setAuthor ]= useState(location.state.author)

    const handelUpdate=(e) => {
        e.preventDefault()
        dispatch(updateBook({id, title, author}))
        navigate('/ShowBooks', {replace:true})
    }
    return (
        <div>
            <h2>Edit Book</h2>

            <form onSubmit={handelUpdate}>
               <div className='form-field' >
                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required />
               </div>

               <div className='form-field' >
                <label htmlFor='author'>Author: </label>
                <input type='text' id='author' name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required />
               </div>
               <button type='submit' >Update </button>
           </form>
        </div>
    );
};

export default EditBook ;