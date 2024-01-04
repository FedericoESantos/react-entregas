
import Item from "../Item/Item";

const ItemList = ({item}) => { 
    return ( // vamos a llamar al componente item y ahi vamos a hacer la descripcion de las propiedades
        <div>  
            {item.map(item => 
            <div key={item.id}> 
                <Item item={item} />
            </div>    
            )}
        </div>
    )
}

export default ItemList;