import style from "./Home.module.css"


const Home = () => {
  return (
    <div className={style.container}>
        <div className={style.texto}>
         <h1><span className={style.azul}>Educación</span> <span />
         <span className={style.negro}>informada</span> <br />
         <span className={style.negro}>y</span> <span />
         <span className={style.azul}>proactiva</span>.</h1>
      <p>Nuestra herramienta integral facilita la colaboración <br/>
         entre los distintos participantes que la componen.</p>
        </div>
      <img  className={style.imgLibros} src="img-pizarron.jpg" alt="pizarron" />
    </div>
    
  )
}

export default Home
