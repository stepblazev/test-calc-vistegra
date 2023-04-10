import { useContext, useLayoutEffect, useState } from 'react';
import { dataContext } from '../../context/dataContext';
import classes from './output.module.scss';
import CalculatorController from '../../controllers/CalculatorController';
import FixerController from '../../controllers/FixerController';
import Square from './square/Square';
import Cell from './cell/Cell';
import Table from './table/Table';
import Total from './total/Total';

export default function Output() {
	const { userInput } = useContext(dataContext);

	const [square, setSquare] = useState(0);
	const [cell, setCell] = useState({ length: 0, width: 0 });
	const [tableData, setTableData] = useState([]);

	useLayoutEffect(() => {
		const { size, list, material, pipe, frame } = userInput;
		const fixer = FixerController.getFixerByMaterial(material);
		const square = CalculatorController.getSquare(size.length, size.width);
		const amountOfLists = CalculatorController.getAmountOfLists(square, list.width);
		const amountOfFix = CalculatorController.getAmountOfFixers(square, fixer.value);
		const { Lc, Wc, amountOfPipes } = CalculatorController.getAmountOfPipes(
			size.length,
			size.width,
			frame.step,
			pipe.width / 1000
		);

		setSquare(square);
		setCell({ length: Lc, width: Wc });
		setTableData([
			{
				name: list.name,
				mes: list.unit,
				amount: amountOfLists,
				price: (amountOfLists * list.price).toFixed(2),
			},
			{
				name: pipe.name,
				mes: pipe.unit,
				amount: amountOfPipes,
				price: (amountOfPipes * pipe.price).toFixed(2),
			},
			{
				name: fixer.fixerName,
				mes: fixer.unit,
				amount: amountOfFix,
				price: (amountOfFix * fixer.price).toFixed(2),
			},
		]);
	}, [userInput]);

	return (
		<div className={classes.output}>
			<h1 className='hder'>Вывод данных</h1>
			<div className={classes.outputContent}>
				<Square value={square} />
				<Cell length={cell.length} width={cell.width} />
				<Table data={tableData} />
				<Total
					value={tableData
						.reduce((counter, current) => counter + Number(current.price), 0)
						.toFixed(2)}
				/>
			</div>
		</div>
	);
}
