import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Index'
import Login from './views/Login/Index'
import AuthOutlet from '@auth-kit/react-router/AuthOutlet';
import Home from './views/Login/Index'

const App = () => {
  return (
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route element={<AuthOutlet fallbackPath='/login' />}>
      <Route path="/" element={<Dashboard />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Route>
  </Routes>
  );
};

export default App
