import style from './login.module.css'
import FormLogin from "./FormLogin";
import SlideLogin from "./SlideLogin";
import Portada1 from '../../assets/img/1.jpg'
import Portada2 from '../../assets/img/2.jpg'

const Index = () => {


  

  return (
    <>
      <div className={style.containerLogin2}>
        <section className={style.formContainer}>

        <FormLogin />
        </section>
        <section className={style.imgContainer}>

        <SlideLogin/> 
        </section>
      </div>
    </>
  );
};

export default Index;