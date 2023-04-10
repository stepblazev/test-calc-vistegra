import classes from './input.module.scss';
import ListSelect from './list-select/ListSelect';
import PipeSelect from './pipe-select/PipeSelect';
import SizeSelect from './size-select/SizeSelect';
import FrameSelect from './frame-select/FrameSelect';
import MaterialSelect from './material-select/MaterialSelect';

export default function Input() {
	return (
		<div className={classes.input}>
			<h1 className='hder'>Ввод данных</h1>
			<div className={classes.inputContent}>
				<div className={classes.inputItem} data-desc='Выбор листов: '>
					<MaterialSelect />
					<ListSelect />
				</div>
				<div className={classes.inputItem} data-desc='Выбор труб: '>
					<PipeSelect />
				</div>
				<div className={classes.inputItem} data-desc='Ваши размеры: '>
					<SizeSelect />
				</div>
				<div className={classes.inputItem} data-desc='Выбор прочности: '>
					<FrameSelect />
				</div>
			</div>
		</div>
	);
}
