import { useSelector } from "react-redux";
import Product from "../Product/Product";
import './productsList.scss';

const ProductsList = () => {
    const products = useSelector((state) => state.productReducer.products);

    return (
        <section id="products">
            <div className="products_list">
                {products.map((product, i) => (
                    <Product key={i} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductsList;
