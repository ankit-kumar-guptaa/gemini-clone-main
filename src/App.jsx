import React from 'react'
import Sidebar from './Component/Sidebar/Sidebar';
import Main from './Component/Main/Main'
import PromptInput from "./Component/PromptInput";

const App = () => {
  return (
    <>
     <Sidebar/>
     <Main/> 
     <PromptInput />
    </>
  )
}

export default App
