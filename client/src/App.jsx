import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard/Index'
import Login from './views/Login/Index'
import Home from './views/Home/Index'
import Prophiles from './views/Prophile/Index';
// import AuthOutlet from '@auth-kit/react-router/AuthOutlet'
// import RequireAuth from '@auth-kit/react-router/RequireAuth'
// import Sons from './views/Prophile/Sons';
const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Dashboard />} >
      </Route> */}
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/prophile" element={<Prophiles />} />
    </Routes>
  );
};

export default App
