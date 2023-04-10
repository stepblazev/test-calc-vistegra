import { useState, useEffect } from 'react';
import { dataContext } from '../context/dataContext';
import ListController from '../controllers/ListController';
import PipeController from '../controllers/PipeController';

export default function DataProvider({ children }) {
	// LISTS OF DATA FROM THE DATABASE
	const [data, setData] = useState({
		materials: ListController.getMaterials(),
		lists: ListController.getListsByMaterial(),
		pipes: PipeController.getPipes(),
		frames: PipeController.getFrames(),
	});
	// USER INPUT
	const [userInput, setUserInput] = useState({
		material: data.materials[0],
		list: data.lists[0],
		pipe: data.pipes[0],
		size: {
			width: 0,
			length: 0,
		},
		frame: data.frames[0],
	});

	useEffect(() => {
		setData((prev) => {
			const newLists = ListController.getListsByMaterial(userInput.material);
			setUserInput((prev) => ({ ...prev, list: newLists[0] }));

			return {
				...prev,
				lists: newLists,
			};
		});
	}, [userInput.material]);

	return (
		<dataContext.Provider value={{ userInput, setUserInput, data, setData }}>
			{children}
		</dataContext.Provider>
	);
}
