import React from 'react'
import produit from './produit';
import './App.css'
const Image = ({produit}) => {
  return (
    
    <div><img src={produit.image} alt={produit.name} /></div>
  )
}

export default Image