import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Ex1 from './Components/Ex1'
import Ex2 from "./Components/Ex2"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ex1 />
    <Ex2 />
  </StrictMode>
)
