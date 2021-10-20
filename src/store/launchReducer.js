const launchReducer = (state, action) => {
	switch (action.type) {
		case 'GET_LAUNCHES':
			return {
				...state,
				launches: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				loading: action.payload,
			};
		case 'TOGGLE_MODAL':
			return {
				...state,
				showModal: !state.showModal,
			};
		default:
			return state;
	}
};

export default launchReducer;
