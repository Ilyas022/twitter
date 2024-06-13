import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { dark, light } from 'constants/theme.ts'
import { useTypedSelector } from 'hooks/useTypedSelector.ts'
import { store } from 'store'
import { selectTheme } from 'store/selectors/themeSelectors.ts'
import { GlobalStyles } from 'styles/global.styles'

import App from './App.tsx'

import './firebase'

function RootComponent() {
	const { name } = useTypedSelector(selectTheme)

	return (
		<ThemeProvider theme={name === 'dark' ? dark : light}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<RootComponent />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
)
