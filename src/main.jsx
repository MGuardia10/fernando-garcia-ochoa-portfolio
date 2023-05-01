import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortofolioApp } from './PortofolioApp'
import './config/i18next.config'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortofolioApp />
  </React.StrictMode>
)
