import { useContext, useState, useLayoutEffect } from 'react';
import { dataContext } from '../../../context/dataContext';
import SizeController from '../../../controllers/SizeController';
import classes from './size-select.module.scss';

export default function SizeSelect() {
	const { setUserInput, userInput } = useContext(dataContext);

	const [widthLimit, setWidthLimit] = useState({ min: 0, max: 0 });
	const [lengthLimit, setLengthLimit] = useState({ min: 0, max: 0 });

	const widthHandler = (e) => {
		let width = +e.target.value;
		if (width > widthLimit.max) {
			width = widthLimit.max;
			return;
		} else if (width < widthLimit.min) {
			width = widthLimit.min;
			return;
		}
		setUserInput((prev) => ({ ...prev, size: { ...prev.size, width } }));
	};

	const lengthHandler = (e) => {
		let length = +e.target.value;
		if (length > lengthLimit.max) {
			length = lengthLimit.max;
			return;
		} else if (length < lengthLimit.min) {
			length = lengthLimit.min;
			return;
		}
		setUserInput((prev) => ({ ...prev, size: { ...prev.size, length } }));
	};

	useLayoutEffect(() => {
		const { min: minWidth, max: maxWidth } = SizeController.getWidth();
		const { min: minLength, max: maxLength } = SizeController.getLength();
		setWidthLimit({ min: minWidth, max: maxWidth });
		setLengthLimit({ min: minLength, max: maxLength });

		setUserInput((prev) => ({ ...prev, size: { ...prev.size, width: minWidth } }));
		setUserInput((prev) => ({ ...prev, size: { ...prev.size, length: minLength } }));
	}, []);

	return (
		<div className={classes.size}>
			<div className={classes.sizeItem}>
				<span className={classes.sizeName}>Ширина:</span>
				<input
					type='number'
					min={widthLimit.min}
					max={widthLimit.max}
					step={0.5}
					value={userInput.size.width}
					onChange={widthHandler}
				/>
				<span className={classes.sizeMes}> м.</span>
			</div>
			<div className={classes.sizeItem}>
				<span className={classes.sizeName}>Длина:</span>
				<input
					type='number'
					min={lengthLimit.min}
					max={lengthLimit.max}
					step={0.5}
					value={userInput.size.length}
					onChange={lengthHandler}
				/>
				<span className={classes.sizeMes}> м.</span>
			</div>
		</div>
	);
}
