import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import XVSofia from './routes/xvSofia/xvSofia.component';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='xvsofia' element={<XVSofia />}/>
        </Routes>
      </Router>
    
  );
}

export default App;
