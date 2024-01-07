import { useState, useEffect } from "react";

const Loader =() => {
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 2000)
        return () => clearTimeout(timer);
    },[])
    
    return loading ? 
    <div className="cargando">
        <img src="../../public/images/logo.png" alt="logo" />
        <h2> ... Cargando todos los productos ... </h2>
        <img src="../../public/images/cargando.png" alt="cargando" className="flash"/>
    </div>
    : null;
}

export default Loader;