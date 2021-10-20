import React from 'react';

const Launch = ({ launch }) => {
	const { flight_number, mission_name } = launch;
	return (
		<li>
			<h2>{mission_name}</h2>
			<p>Flight number: {flight_number}</p>
		</li>
	);
};

export default Launch;
