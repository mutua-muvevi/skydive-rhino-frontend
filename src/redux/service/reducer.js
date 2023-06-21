import serviceTypes from './types';

const initialState = {
	data: null,
	isLoading: false,

	service:null,
	serviceError: null,

};

const serviceReducer = (state = initialState, { type, payload }) => {
	switch (type) {

		case serviceTypes.START_FETCH_SINGLE_SERVICES:
			return { 
				...state,
				loading: true,
			};
		case serviceTypes.SUCCESS_FETCH_SINGLE_SERVICES:
			return {
				...state,
				loading: false,
				service: payload
			};
		case serviceTypes.FAIL_FETCH_SINGLE_SERVICES:
			return {
				...state,
				loading: false,
				service: null,
				serviceError: payload,
			};


		default:
			return state;
	}
};

export default serviceReducer;