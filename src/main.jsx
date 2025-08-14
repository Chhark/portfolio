import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style/index.css'
import { BrowserRouter as Rooter,Routes , Route } from 'react-router-dom'
import Slide from './component/slide/slide.jsx'
import Apropos from './component/A-propos/A-propos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Slide />
    <Apropos />
  </StrictMode>,
)
