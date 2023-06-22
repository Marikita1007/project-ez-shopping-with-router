import "./Cart.scss";
import {useContext} from "react";
import ProductsContext from "../../data/ProductsContext";
import {useDispatch} from "react-redux";

const Cart = () => {

    return (
        <section id="cart">
            <main>
                <h3>Hi ALAN !</h3>
                <p>There are items in your basket</p>
                <button>Clear basket</button>
                <div>Here we want to show the product details</div>
                <div>Here we want to show the Quantity</div>
                <button>Remove</button>
            </main>
        </section>
    )
}

export default Cart;