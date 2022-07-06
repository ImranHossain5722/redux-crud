import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "./BooksSlice";

const ShowBooks = () => {
  const books = useSelector((state) => state.bookReducer.books);
const dispatch= useDispatch();
  const handaleDelete = (id)=>{
    dispatch(deleteBook(id))
  }
  console.log(books);
  return (
    <div>
      <h2>Book List</h2>
      <table>
          <thead>
              <tr>
                 {/* <th>Id</th>  */}
                 <th>Title</th> 
                 <th>Author</th> 
                 <th>Action</th> 
              </tr>
          </thead>
          <tbody>
              {books && books.map ((book) => {

                  const {id, title, author}= book;

                  return (
                  <tr key={id}>
                      {/* <td>{id}</td > */}
                      <td>{title}</td >
                      <td>{author}</td >
                      <td>
                          <Link to='/editbook' state={{id, title,author}} >
                          <button >Edit</button>
                          </Link>
                          <button onClick={()=>{handaleDelete(id)}}>Delete</button>
                      </td >
                  </tr>
                  );
              })}
          </tbody>
      </table>
    </div>
  );
};

export default ShowBooks;
