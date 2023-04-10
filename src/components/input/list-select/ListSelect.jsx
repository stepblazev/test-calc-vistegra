import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { dataContext } from '../../../context/dataContext';
import classes from './list-select.module.scss';

export default function ListSelect() {
	const { data, setUserInput } = useContext(dataContext);

	const [options, setOptions] = useState(
		data.lists.map((l) => ({ value: l.name, label: l.name }))
	);
	const [selected, setSelected] = useState(options[0]);

	const listHandler = (current) => {
		setSelected(current);
		const list = data.lists.find((l) => l.name === current.value);
		setUserInput((prev) => ({ ...prev, list }));
	};

	useEffect(() => {
		setOptions((prev) => {
			const newOptions = data.lists.map((l) => ({ value: l.name, label: l.name }));
			setSelected(newOptions[0]);
			return newOptions;
		});
	}, data.lists);

	return (
		<div className={classes.select}>
			<Select
				className={classes.selectLists}
				options={options}
				onChange={listHandler}
				value={selected}
			/>
		</div>
	);
}
