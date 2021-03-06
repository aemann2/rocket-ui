import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';
import Launch from './Launch';

const Launches = ({ getRocketData }) => {
	const { loading, launches, getLaunches, toggleLaunchModal } =
		useContext(LaunchContext);

	useEffect(() => {
		getLaunches();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = (endpoint) => {
		getLaunches(endpoint);
		toggleLaunchModal();
	};

	const Launches = launches.map((launch, index) => {
		return <Launch key={index} launch={launch} getRocketData={getRocketData} />;
	});

	return (
		<div className='launches'>
			<h1 className='launches__heading'>Space X Launches</h1>
			<div className='launches__container'>
				{loading ? <h1>Loading...</h1> : <ul>{Launches}</ul>}
			</div>
			<div className='launches__buttons'>
				<button onClick={() => handleClick()}>All</button>
				<button onClick={() => handleClick('upcoming')}>Upcoming</button>
				<button onClick={() => handleClick('past')}>Past</button>
			</div>
		</div>
	);
};

export default Launches;
