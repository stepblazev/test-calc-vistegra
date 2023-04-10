import { useContext } from 'react';
import { dataContext } from '../../../context/dataContext';
import classes from './material-select.module.scss';

export default function MaterialSelect() {
	const { data, setUserInput } = useContext(dataContext);

	const materialHandler = (e) => {
		const current = e.target.value;
		const material = data.materials.find((m) => m.key === current);
		setUserInput((prev) => ({ ...prev, material }));
	};

	return (
		<div className={classes.materials}>
			{data.materials.map((mat, ind) => (
				<div key={mat.key}>
					<input
						type='radio'
						name='material'
						value={mat.key}
						onChange={materialHandler}
						defaultChecked={ind === 0}
						id={mat.key}
					/>
					<label htmlFor={mat.key}>{mat.name}</label>
				</div>
			))}
		</div>
	);
}
