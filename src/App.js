
import { ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme';
import Navbar from './Page/Navbar/Navbar';
import Home from './Page/Home/Home';
import Auth from './Page/Auth/Auth';

function App() {
  const user =true;
  
  return (
    <ThemeProvider  theme={darkTheme}>
      
      {user ? <div>

        <Navbar/> 
        <Home/>
        

      </div>:<Auth/>}

      

    </ThemeProvider>
  );
}

export default App;
