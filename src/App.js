import LaunchProvider from './store/LaunchContext';
import Launches from './components/Launches';

function App() {
	return (
		<LaunchProvider>
			<h1>test</h1>
			<Launches />
		</LaunchProvider>
	);
}

export default App;
