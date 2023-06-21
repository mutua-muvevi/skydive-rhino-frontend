import Router from './routes';
import "./App.css";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

// theme
import ThemeProvider from './theme';
import React, { Suspense } from 'react';

const App = () => {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<ThemeProvider>
					<Suspense fallback="Loading...">
						<Router/>
					</Suspense>
				</ThemeProvider>
			</React.StrictMode>

		</Provider>
	)
}

export default App;
