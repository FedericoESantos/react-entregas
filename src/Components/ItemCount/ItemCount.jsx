import { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return ( // cuando el contador sea menor a 1 se desabilite el boton y cuando sea mayor o igual al maximo lo mismo
		<div> 
			<div className="contador">
			<button disabled={count <= 1} onClick={decrease} className="operacion"> 
				- 
			</button>
			<span>{count}</span>
			<button disabled={count >= stock} onClick={increase} className="operacion">
				+ 
			</button>
			</div>

			<div>
				<button disabled={stock <= 0} onClick={() => onAdd(count)} className="agregar">
					Agregar al carrito 
				</button>
				
			</div>
		</div>
	);
};

export default ItemCount;