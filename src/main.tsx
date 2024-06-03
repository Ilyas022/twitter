import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from 'styles/global.styles.ts'
import { theme } from 'constants/theme.ts'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
		</ThemeProvider>
  </React.StrictMode>,
)