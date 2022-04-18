import React from 'react'
import { ListaSedes } from './ListaSedes'
import { SedesForm } from './SedesForm'

export const SedesAdmin = () => {
  return (
    <div>
        <SedesForm />
        <ListaSedes />
    </div>
  )
}
