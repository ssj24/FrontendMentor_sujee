import {Route, Routes} from 'react-router-dom';
import Nav from './Nav.js';
import Home from './Home.js';
import Destination from './Destination.js';
import Crew from './Crew.js';
import Technology from './Technology.js';
import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dest" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/tech" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
