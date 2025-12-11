import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu () {
	return (
		<>
			<div className={styles['head']}>
				<Headling>Menu</Headling>
				<Search placeholder='Введите блюдо или состав'/>
			</div>
			<div>
				<ProductCard
					id = {1}
					title = 'Diablo'
					description='Помидоры, оливки, сыр, руккола, халапеньо, салями'
					rating = {5}
					price={500}
					image='/pizza-diabolo.png'
				/>
			</div>
		</>
	);
}