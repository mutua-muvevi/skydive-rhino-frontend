import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import serviceReducer from './service/reducer';


const config = {
	key: 'root',
	storage,
	whitelist: [
		"service",
	],
};

const rootReducer = combineReducers({
	service: serviceReducer,
});

const persistedReducer = persistReducer(config, rootReducer);

export default persistedReducer;