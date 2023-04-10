import classes from './table.module.scss';

export default function Table({ data }) {
	if (!data.length) return <h2 className={classes.alert}>Нет данных для таблицы</h2>;

	return (
		<table className={classes.table}>
			<thead>
				<tr>
					<th>Наименование</th>
					<th>Единицы</th>
					<th>Кол-во</th>
					<th>Сумма</th>
				</tr>
			</thead>
			<tbody>
				{data.map((d) => (
					<tr key={d.name}>
						<td className={classes.tableName}>{d.name}</td>
						<td className={classes.tableMes}>{d.mes}</td>
						<td className={classes.tableAmount}>{d.amount}</td>
						<td className={classes.tablePrice}>{d.price}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
