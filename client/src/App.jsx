import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Index'
import Login from './views/Login/Index'
import ProphileParents from './views/Prophile/Index'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/prophile' element={<ProphileParents/>} />
        <Route path='/dashboard' element={"Dashboard"} />        
        <Route path='/dashboard' element={"Dashboard"} />
      </Routes>
    </> 
    
  )
}

export default App
