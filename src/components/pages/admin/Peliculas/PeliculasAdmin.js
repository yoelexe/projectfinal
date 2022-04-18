import React from 'react'
import '../adminForms.css'
import { ListaPeliculas } from './ListaPeliculas'
import { PeliculasForm } from './PeliculasForm'

export const PeliculasAdmin = () => {
  return (
    <div>
      <PeliculasForm />
      <ListaPeliculas />
    </div>
  )
}
