import './App.css';
import Homepage from './components/Homepage';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Brewerydetail from './components/Brewerydetail';

function App() {
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant ='h5'><b>My Brewery List</b></Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/:id" element={<Brewerydetail />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;


