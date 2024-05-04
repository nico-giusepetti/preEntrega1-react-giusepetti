import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo-ng-supplements.jpg'
import CartWidget from '../CartWidget/CartWindget'


const NavBar = () => {
    return (
        <nav className='nav'>
            <img src={logo} alt="logo" className='logo' />
            <ul className='categorias'>
                <li>
                    <a href="#">Proteinas</a>
                </li>
                <li>
                    <a href="#">Creatinas</a>
                </li>
                <li>
                    <a href="#">Energizantes</a>
                </li>
                <li>
                    <a href="#">Recuperación muscular</a>
                </li>
                <li>
                    <a href="#">Vitaminas y minerales</a>
                </li>
                <li>
                    <a href="#">Control de peso</a>
                </li>
                <li>
                    <a href="#">Accesorios</a>
                </li>
            </ul>

            <CartWidget/>
        </nav>
    )
}

export default NavBar