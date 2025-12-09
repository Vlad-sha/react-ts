import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

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
					<NavLink to='/' className={({isActive}) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src='/menu-icon.svg' alt='menu icon'/>
					Меню</NavLink>
					<NavLink to='/cart' className={({isActive}) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src='/cart-icon.svg' alt='cart icon'/>
					Корзина</NavLink>
				</div>
				<Button className={styles['exit']}>
					<img src='/exit-icon.svg' alt='exit icon'/>
					Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet/>
			</div>
		</div>
	);
}