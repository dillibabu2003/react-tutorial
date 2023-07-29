import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseRefHook from './UseRefHook.jsx'
import UseRefHookFocus from './UseRefHookFocus.jsx'
import UseReftoAccessPrev from './UseReftoAccessPrev.jsx'
import UseReducer from './UseReducer.jsx'
import CustomHook from './CustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomHook/>
  </React.StrictMode>,
)
