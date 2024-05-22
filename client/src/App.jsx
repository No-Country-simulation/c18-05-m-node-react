import { Routes, Route } from 'react-router-dom'
import Home from './views/Home/Index'
<<<<<<< HEAD
import { Login } from './views/Login/Login'
=======
import Login from './views/Login/Index'
>>>>>>> development

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
<<<<<<< HEAD
        <Route path='/dashboard' element={"Dashboard"} />        
=======
        <Route path='/dashboard' element={"Dashboard"} />
>>>>>>> development
      </Routes>
    </> 
  )
}

export default App
