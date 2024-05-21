import style from './login.module.css'
import FormLogin from "./FormLogin";
import SlideLogin from "./SlideLogin";

const Index = () => {
  return (
    <>
      <div className={style.containerLogin2}>
        <FormLogin />

        <SlideLogin />
      </div>
    </>
  );
};

export default Index;