import style from './CardMensaje.module.css';
import { FaUserCircle } from "react-icons/fa";

const CardMensaje = ({message, date, teacherName, course, img}) => {
  return (
    <div className={style.cardMensajeContainer}>
      <FaUserCircle className={style.perfil} /> 
      <div className={style.contenido}>
        <h2>mensaje: {message}</h2>
        <h2>fecha: {date}</h2>
        <h2>nombre profe: {teacherName}</h2>
        <h2>curso: {course}</h2>
      </div>
    </div>
  )
}

export default CardMensaje

