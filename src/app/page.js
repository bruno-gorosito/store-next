'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Aside } from './components/carrito';
import { Card } from './components/card';
import Image from 'next/image';


export default function Home() {
  
  const [productos, setProductos] = useState([])
  const [usuario, setUsuario] = useState({
    username: '',
    password: ''
  })

  const loadProducts = async() => {
    const resultado = await axios.get('/api/productos');
    setProductos(resultado.data)
  }

  const enviarDatos = async e => {
    e.preventDefault();
    const resultado = await axios.post('/api/auth/login',usuario)
    console.log(resultado)
  }

  const handleChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <>
      {/* <form
        onSubmit={enviarDatos}
      >
        <div>
          <label>
            Username
          </label>
          <input 
            type='text'
            className="text-black"
            name="username"
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label>
            Password
          </label>
          <input 
            type='password'
            name="password"
            className="text-black"
            onChange={e => handleChange(e)}
          />
        </div>
        <button
          type='submit'
        >Enviar</button>
      </form>
      {productos.map(producto => (
        <h1 key={producto._id}>{producto.name}</h1>
      ))} */}
      <div>
        {productos.map(producto => (
          <Card 
            key={producto._id}
            producto={producto}
          />
        ))}
      </div>
    </>
  )
}
