import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBooks = () => {
    const [title, setTitle] =useState('');
    const [author, setAuthor] =useState('');
    const dispatch= useDispatch()
    const numberofBooks = useSelector((state)=> state.bookReducer.books.length)
    const navigate = useNavigate()

    const handelSubmit =(e)=>{

        e.preventDefault()
        const book = {id: numberofBooks + 1 , title, author}
        dispatch(addBook(book))
        navigate('/ShowBooks')


    }
    return (
        <div>
           <h2>  Add Book </h2> 
           <form onSubmit={handelSubmit}>
               <div className='form-field' >
                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} required />
               </div>

               <div className='form-field' >
                <label htmlFor='author'>Author: </label>
                <input type='text' id='author' name='author' value={author} onChange={(e)=>setAuthor(e.target.value)} required />
               </div>
               <button type='submit' >Add Book </button>
           </form>
        </div>
    );
};

export default AddBooks;