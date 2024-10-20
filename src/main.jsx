import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <QueryClientProvider client={queryClient}>
    
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </QueryClientProvider>
   
  </StrictMode>,
)
