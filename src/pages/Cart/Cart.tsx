import { useSelector } from 'react-redux';
import Headling from '../../components/Headling/Headling';
import type { RootState } from '../../store/store';
import CartItem from '../../components/CartItem/Cartitem';
import { useEffect, useState } from 'react';
import type { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';

export function Cart () {
	const [CartProducts, setCartProducts] = useState<Product[]>([]);
	const items = useSelector((s : RootState) => s.cart.items);

	const getItem = async(id : number) => {
		const {data} = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setCartProducts(res);
	};

	useEffect(() => {
		loadAllItems();
	},[items]);
	return (
		<>
			<Headling>Корзина</Headling>
			{items.map(i => {
				const product = CartProducts.find(p => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem count={i.count} {...product}/>;
			})}
		</>
	);
}