import {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";


const App = () => {

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/colors')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }, [])

    const addToBasket = (item) => {
        const index = orders.findIndex(el => el.id === item.id)
        if (index === -1) {
            const newOrder = {
                ...item,
                quantity: 1
            }
            setOrders([...orders, newOrder]);
        } else {
            const newOrders = orders.map((el, i) => {
                if (i === index) el.quantity++;
                return el;
            });
            setOrders(newOrders);
        }
    }

    return (
        <div className="App">
            <Header/>
            <ProductList products={products}/>
            <Footer/>
        </div>
    );
}

export default App;
