import Login from "./login";
import Create from "./create.jsx";
import Home from "./home.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";  


export default function App() {
 return(
    <div>
        <BrowserRouter>
         <Routes>
            <Route index element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
         </Routes>
        </BrowserRouter>
    </div>

 )   
}