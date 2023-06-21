import serviceTypes from "./types";

export const fetchSingleServiceStart = () => ({
	type: serviceTypes.START_FETCH_SINGLE_SERVICES
})

export const fetchSingleServiceSuccess = (service) => ({
	type: serviceTypes.SUCCESS_FETCH_SINGLE_SERVICES,
	payload: service,
})

export const fetchSingleServiceFail = (errMessage) => ({
	type: serviceTypes.FAIL_FETCH_SINGLE_SERVICES,
	payload: errMessage,
})



export const fetchSingleService = (service) => {
	return async (dispatch) => {
		try {
			dispatch(fetchSingleServiceSuccess(service))
		} catch (error) {
			dispatch(fetchSingleServiceFail(error))
		}
	}
}
