import React, { useEffect, useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const resta = () => {
		setCount(count - 1);
	};

	const suma = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return ( // cuando el contador sea menor a 1 se desabilite el boton y cuando sea mayor o igual al maximo lo mismo
		<div> 
			<div className="contador">
			<button disabled={count <= 1} onClick={resta} className="operacion"> 
				- 
			</button>
			<span>{count}</span>
			<button disabled={count >= stock} onClick={suma} className="operacion">
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