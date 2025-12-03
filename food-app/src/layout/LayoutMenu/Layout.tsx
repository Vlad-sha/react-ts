import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

export function Layout () {
	return (
		<div className={styles['layout']}>
			<div className={styles['side-bar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src='/avatar.png' alt='avatar icon'/>
					<div className={styles['name']}>Tav</div>
					<div className={styles['email']}>email</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src='/menu-icon.svg' alt='menu icon'/>
					Меню</Link>
					<Link to='/cart' className={styles['link']}>
						<img src='/cart-icon.svg' alt='cart icon'/>
					Корзина</Link>
				</div>
				<Button className={styles['exit']}>
					<img src='/exit-icon.svg' alt='exit icon'/>
					Выход
				</Button>
			</div>
			<div>
				<Outlet/>
			</div>
		</div>
	);
}