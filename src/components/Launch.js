import React, { useContext } from 'react';
import rocketService from '../services/RocketService';
import { LaunchContext } from '../store/LaunchContext';

const Launch = ({ launch, getRocketData }) => {
	const { toggleLaunchModal } = useContext(LaunchContext);
	const { flight_number, mission_name } = launch;

	return (
		<li className='launch'>
			<h2
				onClick={() => {
					rocketService
						.get(launch.rocket.rocket_id)
						.then((res) => getRocketData(res.data))
						.catch((err) => console.log(err));
					toggleLaunchModal();
				}}
			>
				{mission_name}
			</h2>
			<p>Flight number: {flight_number}</p>
		</li>
	);
};

export default Launch;
