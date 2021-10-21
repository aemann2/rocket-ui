import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';
import Launch from './Launch';

const Launches = ({ getRocketData }) => {
	const { showModal, loading, launches, getLaunches } =
		useContext(LaunchContext);

	useEffect(() => {
		getLaunches();
	}, []);

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
				<button onClick={() => getLaunches()}>All</button>
				<button>Upcoming</button>
				<button>Previous</button>
			</div>
		</div>
	);
};

export default Launches;
