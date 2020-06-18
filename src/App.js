import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext} from "./contexts/ProductContext";
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([
			...cart, item
		])
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, cart, addItem}}>
				<Navigation/>			
				<Route exact path="/">
					<Products/>
				</Route>
				<Route path="/cart">
					<ShoppingCart/>
				</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
