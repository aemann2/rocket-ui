import React, { useContext } from 'react';
import rocketService from '../services/RocketService';
import { LaunchContext } from '../store/LaunchContext';

const Launch = ({ launch, getRocketData }) => {
	const { showModal, toggleLaunchModal } = useContext(LaunchContext);
	const { flight_number, mission_name } = launch;

	const handleClick = async () => {
		try {
			const res = await rocketService.get(launch.rocket.rocket_id);
			getRocketData(res.data);
		} catch (err) {
			console.log(err);
		}

		if (!showModal) {
			toggleLaunchModal();
		} else {
			toggleLaunchModal();
			// timer for animation
			setTimeout(() => {
				toggleLaunchModal();
			}, 100);
		}
	};

	return (
		<li className='launch'>
			<h2 onClick={handleClick}>{mission_name}</h2>
			<p>Flight number: {flight_number}</p>
		</li>
	);
};

export default Launch;
