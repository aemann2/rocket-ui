import LaunchProvider from './store/LaunchContext';
import Launches from './components/Launches';

function App() {
	return (
		<LaunchProvider>
			<Launches />
		</LaunchProvider>
	);
}

export default App;
