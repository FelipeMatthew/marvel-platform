import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes.tsx'
import { ResetCss } from './theme/globalStyle.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ResetCss />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
  </StrictMode>,
)
