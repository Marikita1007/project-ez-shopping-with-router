import './App.scss';
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";// Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";// Bootstrap Bundle JS
import {useContext, useEffect} from "react";
import { useDispatch } from 'react-redux';
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsContext from "./data/ProductsContext";
import {BrowserRouter, Route, Router} from "react-router-dom";
import {Routes} from "react-router";
import Home from "./views/Home";
//test comment
const App = () => {

    const state = useContext(ProductsContext);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(
            'https://fakestoreapi.com/products',
            { method: 'GET' }
        )
            .then( response => response.json() )
            .then( data => {
                let APIProducts = data;

                dispatch( { type: 'SET_PRODUCTS', payload: APIProducts} )
            })
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main id="main_content">
                    <Routes>
                        <Route path={'/'} element={<Home />}/>
                        <Route path={"*"} element={ <p>404</p> } />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    )
}
export default App;
