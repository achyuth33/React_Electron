import logo from '../logo.svg';
import '../App.css';

const Header = () => {
    return(
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Electron</h1>
         
        </header>
      </div>

    )

}
export default Header 