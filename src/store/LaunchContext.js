import React, { createContext, useReducer } from 'react';
import launchService from '../services/LaunchService';
import rocketService from '../services/RocketService';
import launchReducer from './launchReducer';

const initialState = {
	launches: [],
	rocketData: {},
	loading: false,
	showModal: false,
};

// adding all the data we plan to export in here will give us better Intellisense / autocompletion
export const LaunchContext = createContext({
	launches: [],
	rocketData: {},
	loading: false,
	showModal: false,
});

const LaunchProvider = ({ children }) => {
	const [launchState, dispatchLaunchAction] = useReducer(
		launchReducer,
		initialState
	);

	const getLaunches = () => {
		dispatchLaunchAction({ type: 'SET_LOADING', payload: true });
		launchService
			.get()
			.then((res) => {
				const result = res.data;
				dispatchLaunchAction({ type: 'GET_LAUNCHES', payload: result });
				dispatchLaunchAction({ type: 'SET_LOADING', payload: false });
			})
			.catch((err) => console.log(err));
	};

	const getRocketData = (data) => {
		rocketService
			.get(data)
			.then((res) => {
				const result = res.data;
				dispatchLaunchAction({ type: 'GET_ROCKETDATA', payload: result });
			})
			.catch((err) => console.log(err));
	};

	const toggleLaunchModal = () => {
		dispatchLaunchAction({ type: 'TOGGLE_MODAL' });
	};

	const values = {
		launches: launchState.launches,
		rocketData: launchState.rocketData,
		loading: launchState.loading,
		showModal: launchState.showModal,
		getLaunches,
		getRocketData,
		toggleLaunchModal,
	};

	return (
		<LaunchContext.Provider value={values}>{children}</LaunchContext.Provider>
	);
};

export default LaunchProvider;
