import { MdOutlineSquareFoot } from 'react-icons/md';
import classes from './square.module.scss';

export default function Square({ value = 0 }) {
	return (
		<div className={classes.square}>
			<MdOutlineSquareFoot />
			<p>
				Площадь: <b>{value} м2.</b>
			</p>
		</div>
	);
}
