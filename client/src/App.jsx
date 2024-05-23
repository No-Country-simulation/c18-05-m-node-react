import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Index'
import Login from './views/Login/Index'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={"Dashboard"} />        
        <Route path='/dashboard' element={"Dashboard"} />
      </Routes>
    </> 
  )
}

export default App
