import { RiSplitCellsVertical } from 'react-icons/ri';
import classes from './cell.module.scss';

export default function Cell({ length = 0, width = 0 }) {
	return (
		<div className={classes.cell}>
			<RiSplitCellsVertical />
			<p>
				Размер ячейки:{' '}
				<b>
					{length}м на {width}м.
				</b>
			</p>
		</div>
	);
}
