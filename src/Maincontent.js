import './MainContent.css';
function MainContent() {
    return(
    <div className='body-container'>
        <div className="body-title">
            <h1>Fun facts about React</h1>
        </div>
        <div className="body-content">
            <ul className="fact-list">
                <li className="fact-items">Was first released in 2013</li>
                <li className="fact-items">Was originally cerated by Jordan Walke</li>
                <li className="fact-items">Has well over 100K stars on GitHub</li>
                <li className="fact-items">Is maintained by Facebook</li>
                <li className="fact-items">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
      
      
    )
  }

export default MainContent;