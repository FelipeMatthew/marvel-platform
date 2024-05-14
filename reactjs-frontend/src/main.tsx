import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes.tsx'
import { ThemeProvider } from 'styled-components'
import { marvelTheme } from './theme/index.ts'
import { ResetCss } from './theme/globalStyle.ts'
import { RecoilRoot } from 'recoil'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={marvelTheme()} />
      <ResetCss />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
