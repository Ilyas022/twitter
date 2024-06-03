import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { theme } from 'constants/theme.ts'
import { GlobalStyles } from 'styles/global.styles.ts'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
