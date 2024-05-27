import { useEffect, useState } from "react";
import HomeProfesor from "./components/HomeProfesor";
import HomePadre from "./components/HomePadre";
import HomeEstudiante from "./components/HomeEstudiantes";
import { userHistory } from "../../Api/history";

const Index = () => {


  const datos = [
    { id: 1, evento: 'Feria del Libro', descripcion: 'Detalle 1', fecha: "2024/05/23", hora: "9:30 - 12:30", verMas:"vfdvdf"  },
    // { id: 2, evento: 'dia de la infependendia', detalle: 'Detalle 1', fecha: '2024/05/25' },
    // { id: 3, evento: 'dia de la bandera', detalle: 'Detalle 1', fecha: '2024/05/26' },
    // conectar con back y poner los datos verdaderos
  ];

  // const instance = axios.create({
  //   baseURL: 'http://localhost:3001/students/searchAll',
    
  // });

  //  const GetRequest = instance.get("/")
  // .then(e =>  console.log(e.data))

  

  return (
    <main>
      <Navbar />
      <Outlet />
      <p>Index Home</p>
      <Cards informacion={datos}/>
    </main>

  const [roluser, setRoluser] = useState("estudiante");

  useEffect(() => {
    const dataHitorial = async () => {
      try {
        const response = await userHistory();
        console.log(response);
        // Aquí puedes hacer algo con la respuesta, como actualizar el estado del componente
      } catch (error) {
        console.error("Error fetching user history:", error);
      }
    };

    dataHitorial();
  }, []);

  return (
    <>
      {roluser === "profesor" && <HomeProfesor />}
      {roluser === "padre" && <HomePadre />}
      {roluser === "estudiante" && <HomeEstudiante />}
    </>

  );
};

export default Index;
