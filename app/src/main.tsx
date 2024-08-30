import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ApolloProvider} from '@apollo/client';
import {ApolloService} from './shared/services/src/ApolloService.ts'

const apolloService = new ApolloService()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={apolloService.client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
)
