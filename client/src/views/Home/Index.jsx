import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/cards/Cards";

const Index = () => {

  const datos = [
    { id: 1, titulo: 'Título 1', detalle: 'Detalle 1', fecha: 'fecha 1' },
    { id: 2, titulo: 'Título 2', detalle: 'Detalle 2', fecha: 'fecha 2' },
    // conectar con back y poner los datos verdaderos
  ];


  return (
    <main>
      <Navbar />
      <Outlet />
      <p>Index Home</p>
      <Cards informacion={datos}/>
    </main>
  );
};

export default Index;
