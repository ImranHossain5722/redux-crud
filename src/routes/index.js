import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../layouts/Nav';
import ShowBooks from '../fetaures/ShowBooks';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import AddBooks from '../fetaures/AddBooks';
import EditBook from '../fetaures/EditBook';

const Index = () => {
    return (
       <BrowserRouter>
       <Nav></Nav>
         <main>
         <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/ShowBooks' element={<ShowBooks></ShowBooks>} ></Route>
            <Route path='/addBooks' element={<AddBooks></AddBooks>} ></Route>
            <Route path='/editbook' element={<EditBook></EditBook>} ></Route>

            <Route path='*' element ={<Error/>} ></Route>

        </Routes>
         </main>
       </BrowserRouter>


    );
};

export default Index;