import React from 'react'
import produit from './produit';

const Name = ({produit}) => {
  return (
    <div><h2>{produit.name}</h2></div>
  )
}

export default Name