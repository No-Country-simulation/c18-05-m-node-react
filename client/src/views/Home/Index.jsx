import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <p>Index Home</p>
    </main>
  );
};

export default Index;
