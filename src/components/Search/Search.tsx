import styles from './Search.module.css';
import cn from 'classnames';
import { forwardRef } from 'react';
import type { SearchProps } from './Search.props';


const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({className, isValid = true, ...props}, ref) {
	return (
		<div className={styles['input-wrapper']}>
			<input {...props} ref={ref} className={cn(className, styles['input'], {
				[styles['invalid']] : isValid
			})}/>
			<img className={styles['icon']} src='/search-icon.svg' alt='иконка поиска'/>
		</div>
	);
		
});

export default Search;