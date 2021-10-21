import { useContext, useState } from 'react';
import Launches from './components/Launches';
import Modal from './components/UI/Modal';
import { LaunchContext } from './store/LaunchContext';

function App() {
	const { showModal } = useContext(LaunchContext);
	const [rocketData, setRocketData] = useState('');

	const getRocketData = (data) => {
		setRocketData(data);
	};
	console.log(rocketData);

	return (
		<>
			{showModal && <Modal rocketData={rocketData} />}
			<Launches getRocketData={getRocketData} />
		</>
	);
}

export default App;
