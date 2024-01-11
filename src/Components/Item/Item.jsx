
import { Link } from "react-router-dom"; // importo el Link porque cuando hagamos click en la card me tiene que llevar a mas detalles

const Item = ({item}) => { // aca vamos a poner la card completa

    return (
        <Link to={"/item/" + item.id}>
            <div className="card-cont">
                <div className="card">
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                    <p> $ {item.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;