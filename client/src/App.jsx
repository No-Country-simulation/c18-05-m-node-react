import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Index'
import Login from './views/Login/Index'
import Home from './views/Home/components/Home'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} >
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
      </Routes>
    </>
  );
};

export default App
