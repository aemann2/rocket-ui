import React, { useContext } from 'react';
import { LaunchContext } from '../store/LaunchContext';

const Launch = ({ launch }) => {
	const { showModal, toggleLaunchModal, getRocketData } =
		useContext(LaunchContext);
	const { flight_number, mission_name } = launch;

	const handleClick = async () => {
		try {
			await getRocketData(launch.rocket.rocket_id);
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
