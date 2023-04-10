import { useContext, useState, memo } from 'react';
import Select from 'react-select';
import { dataContext } from '../../../context/dataContext';
import classes from './pipe-select.module.scss';

export default function PipeSelect() {
	const { data, setUserInput } = useContext(dataContext);

	const [options, setOptions] = useState(
		data.pipes.map((p) => ({ value: p.name, label: p.name }))
	);
	const [selected, setSelected] = useState(options[0]);

	const handler = (current) => {
		setSelected(current);
		const pipe = data.pipes.find((p) => p.name === current.value);
		setUserInput((prev) => ({ ...prev, pipe }));
	};

	return (
		<Select
			className={classes.pipes}
			options={options}
			onChange={handler}
			value={selected}
		/>
	);
}
