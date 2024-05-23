import Card from "../card/Card";
import style from "./Cards.module.css";

const Cards = ({informacion}) => {
  return (
    <div className={style.cardsContainer}>
        {informacion.map((info) => (
            <Card
                key={info.id}
                titulo={info.titulo}
                detalle={info.detalle}
                fecha={info.fecha} 
            />
        ))}
    </div>
  )
}

export default Cards;