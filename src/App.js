import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GradUNLA from './routes/graduacionUNLA/graduacionUNLA.component.jsx';
import GradUNLAInvitacion from './routes/graduacionUNLA/graduacionUNLA-Invitacion.component.jsx';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path='graduacion-UNLA' element={<GradUNLA />}/>
          <Route path='graduacion-UNLA-Invitacion' element={<GradUNLAInvitacion />}/>
          
        </Routes>
      </Router>
    
  );
}

export default App;
