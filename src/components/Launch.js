import React, { useContext } from 'react';
import { LaunchContext } from '../store/LaunchContext';

const Launch = ({ launch }) => {
	const { toggleLaunchModal } = useContext(LaunchContext);
	const { flight_number, mission_name } = launch;

	return (
		<li className='launch'>
			<h2 onClick={() => toggleLaunchModal()}>{mission_name}</h2>
			<p>Flight number: {flight_number}</p>
		</li>
	);
};

export default Launch;
