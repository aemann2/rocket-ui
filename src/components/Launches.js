import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';
import Launch from './Launch';

const Sample = () => {
	const { loading, launches, getLaunches } = useContext(LaunchContext);

	useEffect(() => {
		getLaunches();
	}, []);

	const Launches = launches.map((launch) => {
		return <Launch key={launch.flight_number} launch={launch} />;
	});

	return (
		<div className='launches'>
			<h1>Space X Launches</h1>
			<div className='launches__container'>
				{loading ? <h1>Loading...</h1> : <ul>{Launches}</ul>}
			</div>
		</div>
	);
};

export default Sample;
