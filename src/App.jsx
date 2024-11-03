import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary routing components
import Projects from './projects';
import Events from './events';
import HomePage from './homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
