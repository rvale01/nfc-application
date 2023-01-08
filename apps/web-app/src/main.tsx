import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import { General } from './pages/General/ui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <General/>
  </React.StrictMode>,
)
