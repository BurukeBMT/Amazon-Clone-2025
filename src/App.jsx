import { useState ,useEffect, useContext} from 'react'

import './App.css'

import Routering from './Router'
import { DataContext } from './Components/DataProvider/DataProvider'
import { Type } from './utility/actiontype'

function App() {
  const [{user},dispatch]= useContext(DataContext)

  return (
    <>
      <Routering/>
    </>
  )
}

export default App
