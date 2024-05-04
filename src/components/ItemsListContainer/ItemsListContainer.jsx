import React from 'react'
import logoConstruccion from '../../assets/herramientas-de-construccion.png'
import './ItemsListContainer.css'

const ItemListContainer = ({msj}) =>{
    return(
        <div className='seccion-listContainer'>
            <img src={logoConstruccion} alt="logo de construccion" />
            <h2>{msj}</h2>
        </div>
    )
}

export default ItemListContainer