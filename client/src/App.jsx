import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Index'

const App = () => {

  return (
    <>
      <Routes>        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={"Login"} />
        <Route path='/dashboard' element={"Dashboard"} />        
      </Routes>
    </> 
  )
}

export default App
