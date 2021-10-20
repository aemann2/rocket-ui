import React, { useContext, useEffect } from 'react';
import { LaunchContext } from '../store/LaunchContext';
import Launch from './Launch';

const Sample = () => {
	const { showModal, loading, launches, getLaunches } =
		useContext(LaunchContext);

	useEffect(() => {
		getLaunches();
	}, []);

	console.log(showModal);

	const Launches = launches.map((launch, index) => {
		return <Launch key={index} launch={launch} />;
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

export default Sample;
