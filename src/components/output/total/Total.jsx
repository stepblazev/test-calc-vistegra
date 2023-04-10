import { IoMdPricetag } from 'react-icons/io';
import classes from './total.module.scss';

export default function Total({ value = 0 }) {
	return (
		<div className={classes.total}>
			<IoMdPricetag />
			<p>
				Цена: <b>{value}</b>
			</p>
		</div>
	);
}
