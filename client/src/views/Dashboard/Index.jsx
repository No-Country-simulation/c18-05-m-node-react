import { useEffect, useState } from 'react';
import style from './styles/dashboard.module.css'
import Sidebar from './components/Sidebar';
import Home from '../Home/Index'
import Cards from '../../components/cards/Cards';
import { Outlet } from "react-router-dom";

const Index = () => {
    const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
    const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
    const [isMobileView, setIsMobileView] = useState(false);

    const datosEvent = [
        { id: 1, evento: 'Feria del Libro', descripcion: 'Detalle 1', fecha: "2024/05/23", hora: "9:30 - 12:30", verMas:"vfdvdf"  },
        // { id: 2, evento: 'dia de la infependendia', detalle: 'Detalle 1', fecha: '2024/05/25' },
        // { id: 3, evento: 'dia de la bandera', detalle: 'Detalle 1', fecha: '2024/05/26' },
        // conectar con back y poner los datos verdaderos
      ];
  
    const toggleLeftSidebar = () => {
      setLeftSidebarVisible(!isLeftSidebarVisible);
    };
  
    const toggleRightSidebar = () => {
      setRightSidebarVisible(!isRightSidebarVisible);
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Llamamos a la función para establecer el estado inicial
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <div className={style.container}>
        <Sidebar
          position="left"
          visible={!isMobileView || isLeftSidebarVisible}
          toggleSidebar={toggleLeftSidebar}
        />
        <main className={style.mainContent}>
          {isMobileView && (
            <button className={`${style.hamburger} ${style.leftHamburger}`} onClick={toggleLeftSidebar}>
              ☰
            </button>
          )}
          <button className={`${style.hamburger} ${style.rightHamburger}`} onClick={toggleRightSidebar}>
            ☰
          </button>
          <div className={style.content}>
            <h1>Contenido</h1>
            {/* Aquí va el contenido principal */}
          <Outlet/>
          </div>
        </main>
        <Sidebar
          position="right"
          visible={!isMobileView || isRightSidebarVisible}
          toggleSidebar={toggleRightSidebar}
        />
      </div>
    );
  };


export default Index