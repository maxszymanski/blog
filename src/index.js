// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';

// >> Components
import App from './App';

// >> Script
ReactDOM.render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<App />
		</StyledEngineProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
