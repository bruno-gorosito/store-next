

'use client'
import axios from 'axios';
import { CldImage } from 'next-cloudinary'
import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState } from 'react';

export default function Home() {
  
  const [productos, setProductos] = useState([])
  
  const loadProducts = async() => {
    const res = await axios.get('/api/productos');
    setProductos(res.data)
  }

  useEffect(() => {
    loadProducts();
  }, [])

  return (
    <>
      {productos.map(producto => (
        <h1 key={producto._id}>{producto.name}</h1>
      ))}
    </>
  )
}
