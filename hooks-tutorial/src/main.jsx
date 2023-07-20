import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseRefHook from './UseRefHook.jsx'
import UseRefHookFocus from './UseRefHookFocus.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseRefHookFocus/>
  </React.StrictMode>,
)
