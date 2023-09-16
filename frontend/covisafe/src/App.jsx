import { useState } from 'react'
import Nav from './components/nav'
import Footer from './components/Footer'
import './css/footer.css'
import Main from './components/Main'
import Login from './components/Login'

function App() {
  const [zoom, setZoom] = useState(100); 
  return (
    <div style={{ zoom: `${zoom}%` }}>
      <Nav zoom={[zoom, setZoom]} />
      {/* <Main /> */}
      <Login/>
      <Footer />
    </div>
  );
}

export default App