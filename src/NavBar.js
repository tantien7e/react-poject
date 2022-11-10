import './NavBar.css';
import logo from './images/logo192.png'
function NavBar(){
    return (
        <div className='navbar-container'> 
            <div className='logo-title'>
                <img src={logo} alt='react logo' className='navbar-logo'></img>
                <h1>ReactFacts</h1>
            </div>
            <div className='course-name'>
                <h2>React Course - Project 1</h2>
            </div>
        </div>
    )
}

export default NavBar;