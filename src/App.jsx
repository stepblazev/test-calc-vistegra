import DataProvider from './components/DataProvider';
import Output from './components/output/Output';
import Input from './components/input/Input';
import Layout from './components/Layout';

export default function App() {
	return (
		<DataProvider>
			<Layout>
				<Input />
				<Output />
			</Layout>
		</DataProvider>
	);
}
