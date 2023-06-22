import './header.scss'
import shoppingCartImage from './logos/shopping-cart.png';
import man from './logos/man.png';
import light_moon from './logos/moon_light.png';
import dark_moon from './logos/moon_dark.png';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import ProductsContext from '../../data/ProductsContext';

const Header = () => {

    const state = useContext(ProductsContext);
    const cartItems = useSelector((state) => state.productReducer.myCart);
    const totalQuantity = Object.values(cartItems).reduce(
        (total, item) => total + item.quantity,
        0
    );
    console.log("header state:",state);

    return (
        <>
            <header id="main_header">
                <h1>EZ Shopping</h1>
                <nav>
                    <ul>
                        <li><a href="">
                            <img className="icons" src={man} alt="Man Icon" />
                            Alan Turing</a>
                        </li>
                        <li><a href="">
                            {totalQuantity}
                            <img className="icons" src={shoppingCartImage} alt="Shopping Cart" />
                            items</a>
                        </li>
                        <li><a href="">
                            <img className="icons" src={light_moon} alt="Light Mode" />
                            Light Mode</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;