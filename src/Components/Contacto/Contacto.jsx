import React from 'react'

const Contacto = () => {
    return (
        <div className='contacto'>
        <img src="../../../public/images/logo.png" alt="logo" className='logo'/>
            <h1> Contáctenos por cualquier duda o sugerencia</h1>
            <img src="../../../public/images/whatsapp.png" alt="whats" />
            <h2>Comunicarse al: <p> (+54) 221 301 1421</p> </h2>
            <div>
                <div className="redes">
                    <img src="../../../public/images/facebook.png" alt="logo-face" />
                    <p>: Pizza-Flash</p>
                    <img src="../../../public/images/instagram.png" alt="logo-insta" />
                    <p>: Pizza-Flash</p>
                </div>
            </div>
            <figure>
                <img src="../../../public/images/flash-cont.png" alt="flash" />
            </figure>
        </div>
    )
}

export default Contacto