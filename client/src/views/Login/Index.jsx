import style from './styles/login.module.css'
import FormLogin from "./components/FormLogin";
import SlideLogin from "./components/SlideLogin";

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


