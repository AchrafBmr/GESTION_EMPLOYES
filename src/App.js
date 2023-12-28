import React from 'react'
import List from './composants/Liste'
import Add from './composants/Add'
import Edit from './composants/Edit'
import { BrowserRouter , Link, Route , Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
    <BrowserRouter>
        <Link className='Link' to={'/'}></Link>
        <Routes>
          <Route path='/' element={<div><Add/><List/></div>}/>
          <Route path='/Edit/:matt' element={<div><Edit/><List/></div>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
