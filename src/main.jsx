import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* 
source: https://www.freecodecamp.org/news/configure-metadata-in-single-page-applications/
 */
document.getElementsByTagName('meta')["description"].content = "New meta description!";

document.title = "New Title!";