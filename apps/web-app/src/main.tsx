import React from 'react'
import ReactDOM from 'react-dom/client'
import { Carousel, HomepageLayout } from "ui-web";
import './assets/index.css'
import { General } from './pages/General';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <General/>
  </React.StrictMode>,
)
