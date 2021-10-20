import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';

const Sample = () => {
	const { loading, launches, getLaunches } = useContext(LaunchContext);

	useEffect(() => {
		getLaunches();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				launches.map((launch) => {
					return <h1>{launch.flight_number}</h1>;
				})
			)}
		</div>
	);
};

export default Sample;
