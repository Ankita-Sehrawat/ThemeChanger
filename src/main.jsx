import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserContextFunc } from './contextApi/UserContextFile.jsx'
import CardContextFile from './contextApi/CardContextFile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextFile>
      {/* step 3 */}
      <UserContextFunc>
        <App />
      </UserContextFunc>
    </CardContextFile>
  </StrictMode>,
)
