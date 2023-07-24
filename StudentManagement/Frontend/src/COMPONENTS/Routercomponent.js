import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Landing from './GENERAL/Landing'
export default function Routercomponent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
      </Routes>
    </div>
  )
}
