import style from './login.module.css'
import FormLogin from "./FormLogin";
import SlideLogin from "./SlideLogin";

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