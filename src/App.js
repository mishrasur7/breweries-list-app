import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar >
        <Toolbar >
          <Typography variant ='h4' >My Brewery list</Typography>
        </Toolbar>
      </AppBar>
      <Homepage />
    </div>
  );
}

export default App;


