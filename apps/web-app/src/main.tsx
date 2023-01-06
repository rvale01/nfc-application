import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Button } from "ui-web";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
)
