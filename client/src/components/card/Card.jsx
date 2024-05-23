import style from './Card.module.css';


const Card = ({ titulo, detalle, fecha }) => {
  return (
    <div className={style.card}>
        <h2>Titulo:{titulo}</h2>
        <h2>Detalle:{detalle}</h2>
        <h2>Fecha:{fecha}</h2> 
    </div>
  )
}

export default Card;