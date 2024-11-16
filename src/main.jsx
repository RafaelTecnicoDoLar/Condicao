import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './Components/Header'
import Ex1 from './Components/Ex1'
import Ex2 from "./Components/Ex2"
import Ex3 from './Components/Ex3'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Ex1 />
    <Ex2 />
    <Ex3 />
  </StrictMode>
)
