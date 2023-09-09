import React from 'react'
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="803733254857-fq09ioobei1b207bf7jr6ns5qdklmvit.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
)