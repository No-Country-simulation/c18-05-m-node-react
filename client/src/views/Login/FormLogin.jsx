import style1 from "./login.module.css";
import style2 from "./LoginForm.module.css";
import SvgComponent from "./SvgLoginGoogle";

const FormLogin = () => {

  return (
    <section className={style1.formContainer}>
      
      <div className={style2.formContainer_welcome}>

        <h1 className={style2.titleLogin}>EduSync</h1>
        <b className={style2.RegisterLogin}>Registrate por acá</b>
        <p className={style2.welcomeLogin}>Bienvenido a esta plataforma!</p>
      </div>

      <div className={style2.GoogleLogin} >
        <SvgComponent />
      </div>
      <div className={style2.divisorLoginGoogle__email_password}>
        <hr />
        <b>O continua con email</b>
        <hr />
      </div>
      <form className={style2.formLogin} >
        <input type="email" name="" id="Email" placeholder="Email" />
        <input type="password" name="" id="password" placeholder="Contraseña" />

        

        <input onClick={(e) => e.preventDefault()} type="submit" value="Accede" />
        
      </form>
    </section>
  )
}

export default FormLogin