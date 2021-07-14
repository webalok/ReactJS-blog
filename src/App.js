import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';

import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
						<Navbar />
						<Button color="primary" variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
