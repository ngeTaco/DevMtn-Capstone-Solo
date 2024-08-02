import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// https://ed.devmountain.com/materials/ogptlh2/lectures/wb-react-router/
// router provider, create browserrouter from router-dom
// make a router with cbr
// instead of line 15 do router provier

//outlet from router-dom into all of the pages