import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Calculator from './pages/Calculator';
import Home from './pages/Home';
import Notes from './pages/Notes';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />}/>
          <Route path="/calculator" element={<Calculator />}/>
          <Route path="/notes" element={<Notes />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
