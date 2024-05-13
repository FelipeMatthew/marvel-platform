import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes.tsx'
import { ThemeProvider } from 'styled-components'
import { marvelTheme } from './theme/index.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={marvelTheme()} />
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>,
)
