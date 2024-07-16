import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageChat from './pages/chat/Page'



const App = () => {
  return (
    
      <Routes>
        <Route path='' element={<PageChat/>}/>
        
      </Routes>
   
  )
}

export default App
