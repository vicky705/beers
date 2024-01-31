import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BeerState from './Context/BeerState.jsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BeerState>
        <App />
      </BeerState>
    </BrowserRouter>
  </React.StrictMode>,
)
