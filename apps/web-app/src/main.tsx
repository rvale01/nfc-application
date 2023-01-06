import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Carousel, HomepageLayout } from "ui-web";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomepageLayout>
      <Carousel>
        <div>okay 1</div>
        <div>okay 2</div>
      </Carousel>
    </HomepageLayout>
  </React.StrictMode>,
)
