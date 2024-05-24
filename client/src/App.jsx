import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Index'
import Login from './views/Login/Index'
import Home from './views/Home/Index'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} >
        <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App
