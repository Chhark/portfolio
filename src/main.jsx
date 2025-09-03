import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Style/index.css'
import { BrowserRouter as Rooter,Routes , Route } from 'react-router-dom'
import Accueill from './Page/Accueill'
import Projet from './Page/Projet'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rooter>
      <Routes>
        <Route path='/portfolio' element={<Accueill />}/>
        <Route path='/portfolio/projet/:id' element={<Projet />} />
      </Routes>
    </Rooter>
  </StrictMode>,
)
