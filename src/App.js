import './App.css';
import Navbar from './components/navBar/Navbar';
import { CiMenuBurger } from "react-icons/ci";
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
