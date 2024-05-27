import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import style from './styles/dashboard.module.css';
import Sidebar from './components/Sidebar';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';


const Index = () => {
  const [isLeftSidebarVisible, setLeftSidebarVisible] = useState(true);
  const [isRightSidebarVisible, setRightSidebarVisible] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  const navigate = useNavigate()
  const signOut = useSignOut()
  const auth = useAuthUser()

  const handleSignOut = ()=>{
    signOut()
    navigate('/login')
  }


 

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
    <>
 
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
            <button
            onClick={handleSignOut}
            >desconectarse</button>
            {`usuario: ${auth.email}` }
          </div>
        </main>
        <Sidebar
          position="right"
          visible={!isMobileView || isRightSidebarVisible}
          toggleSidebar={toggleRightSidebar}
        />
      </div>

    </>
   
  );
};

export default Index;
