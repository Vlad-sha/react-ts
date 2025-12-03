import { useState, type MouseEvent } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import { Menu } from './pages/Menu/Menu';
import { Cart } from './pages/Cart/Cart';


function App() {

	const [counter, setCounter] = useState<number> (0);

	const addCounter = (e : MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCounter}>Кнопка</Button>
			<Button appearance='big' onClick={addCounter}>Кнопка</Button>
			<Input placeholder='Email'/>
			{/* <Routes>
				<Route path='/' element={<Menu/>}/>
				<Route path='/cart' element={<Cart/>}/>
				<Route path='*' element={<Error/>}/>
			</Routes> */}
		</>
	);
}

export default App;
