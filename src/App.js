import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GraduacionUNLA from './routes/graduacionUNLA/graduacionUNLA.component.jsx';
import GraduacionesUNLAInvitacion from './routes/graduacionUNLA/graduacionesUNLA-Invitacion.jsx';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path='graduacion-unla/login' element={<GraduacionUNLA />}/>
          <Route path='graduacion-unla' element={<GraduacionesUNLAInvitacion />}/>
        </Routes>
      </Router>
    
  );
}

export default App;