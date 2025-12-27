import { useRef, useState } from 'react'
import RefComponent from './components/RefComponent'
import MemoComponent from './components/MemoComponent'
import TransitionComponent from './components/TransitionComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomComponent from './components/CustomComponent'



function App() {

  return (
    <>
      {/* <RefComponent /> */}
      {/* <MemoComponent /> */}

      {/* <TransitionComponent /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<TransitionComponent />} />
          <Route path='/memo' element={<MemoComponent />} />
        </Routes>
      
      </BrowserRouter> */}

      <CustomComponent />
    </>
  )
}

export default App
