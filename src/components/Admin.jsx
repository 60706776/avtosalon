import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePost from '../components/CreatePost'


export default function Admin() {
  return (
    <>
    <Routes>
        <Route path='/' element={<CreatePost/>}/>
        <Route path='createpost' element={<CreatePost/>}/>
    </Routes>
    </>
  )
}
