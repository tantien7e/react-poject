import './App.css';
import pic1 from './images/pic1.jpg'
import NavBar from './NavBar';
import MainContent from './Maincontent';

function App() {
  return (
    <div className='container'>
      <NavBar className='Nav'/>
      <MainContent className='Content'/>
    </div>
  );
}

export default App;
