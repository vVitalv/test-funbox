import React from 'react'
import { createRoot } from 'react-dom/client'

import './assets/styles/style.scss'

import Root from './config/root'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<Root />)
