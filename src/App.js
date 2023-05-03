import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GestionStagi from './pages/GestionStagi';
import Profil from './pages/Profil';
import Deconnexion from './pages/Deconnexion';
import GestionEncad from './pages/GestionEncad';
import GestionAbs from './pages/GestionAbs';

{ /*import Contact from './Contact';
import About from './About';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <br/>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about"  element={<About/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;*/}

// what is inside the return of the function seems like HTML but it's not it is instead JSX used in react they are similar but there's some differences
// such as className instead of class in HTML 








const App= ()=>{
  return(
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/gestionStagiaires" element={<GestionStagi/>}/>
      <Route path="/profil" element={<Profil/>}/>
      <Route path="/deconnexion" element={<Deconnexion/>}/>
      <Route path="/gestionEncadrants" element={<GestionEncad/>}/>
      <Route path="/gestionAbsences" element={<GestionAbs/>}/>


    </Routes>
    </Sidebar>
   
    </BrowserRouter>
  );
}
export default App;
