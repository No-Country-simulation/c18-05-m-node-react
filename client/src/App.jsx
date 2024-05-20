import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Index'
import Login from './views/Login/index'

const App = () => {

  return (
    <>
      <Routes>        
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={"Dashboard"} />        
      </Routes>
    </> 
  )
}

export default App
