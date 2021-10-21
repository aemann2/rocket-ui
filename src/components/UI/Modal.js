import { useContext } from 'react';
import { LaunchContext } from '../../store/LaunchContext';
import Portal from './Portal';

const Modal = ({ rocketData }) => {
	const { toggleLaunchModal } = useContext(LaunchContext);
	const { rocket_name, cost_per_launch, description } = rocketData;

	// stack overflow to the rescue
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	return (
		<Portal>
			<div className='modal'>
				<div>
					<p>Rocket Name: {rocket_name}</p>
				</div>
				<div>
					<p>Cost Per Launch: ${numberWithCommas(cost_per_launch)}</p>
				</div>
				<div>
					<p>Rocket Description: {description}</p>
				</div>
				<button onClick={() => toggleLaunchModal()}>Close</button>
			</div>
		</Portal>
	);
};
export default Modal;
