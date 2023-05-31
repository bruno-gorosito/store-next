'use client'
import axios from "axios";
import { useEffect, useState } from "react";


export const Header = () => {

    
    const [categorias, setCategorias] = useState([])
    const [menu, setMenu] = useState('');

    const loadCategorias = async() => {
        const res = await axios.get('/api/categorias');
        setCategorias(res.data)
    }
    

    useEffect(() => {
        loadCategorias();
        }, [])


    return(
        <>
            <header className="w-full bg-purple-700 text-white ">
                <div className="mx-auto bg-purple-700 text-center py-4 z-20 relative">
                    <h1 className="my-4 text-4xl">BruShop</h1>
                    <p>By: Bruno Gorosito</p>
                    <nav className="w-full text-center"> 
                        <ul className="flex flex-col z-50">
                            <li className="h-8 py-8" onClick={() => setMenu(!menu)}>
                                <svg className={`absolute right-4 w-6 h-6 ${!menu ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                                <svg className={`absolute right-4 w-6 h-6 ${menu ? "block" : "hidden"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>

                            </li>
                        </ul>
                    </nav>
                </div>
                
                
                <ul className={`${menu ? "translate-x-0" : "translate-x-full "} w-full h-screen text-white text-center  bg-purple-700 z- transition fixed top-0 flex flex-col justify-center`}>
                    {categorias.map(categoria => (
                        <li 
                            key={categoria._id}
                            className="py-4 w-full capitalize hover:bg-purple-950 "    
                        >{categoria.categoria}</li>
                    ))}
                </ul>
            </header>
        </>
    )
}