import { useContext, useState } from 'react';
import { dataContext } from '../../../context/dataContext';
import classes from './frame-select.module.scss';
import Select from 'react-select';

export default function FrameSelect() {
	const { data, setUserInput } = useContext(dataContext);

	const [options, setOptions] = useState(
		data.frames.map((f) => ({ value: f.name, label: f.name }))
	);
	const [selected, setSelected] = useState(options[0]);

	const handler = (current) => {
		setSelected(current);
		const frame = data.frames.find((f) => f.name === current.value);
		setUserInput((prev) => ({ ...prev, frame }));
	};

	return (
		<Select
			className={classes.frames}
			options={options}
			value={selected}
			onChange={handler}
		/>
	);
}
