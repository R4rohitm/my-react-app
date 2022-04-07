import logo from './logo.svg';
import './App.css';
import Problem1 from './Day-1/components/Problem1'
import JoinUs from './Day-1/components/JoinUs'
import Settings from './Day-1/components/Settings'
import Login from './Day-1/components/Login'
import Contactus from './Day-1/components/ContactUs'
import Search from './Day-1/components/Search'
import Help from './Day-1/components/Help'
import Home from './Day-1/components/Home'
import Download from './Day-1/components/Download';

function App() {
  return (
   <div>
      
      <Problem1/>
      <div>
          <JoinUs heading="JOIN US" />
          <Settings heading="Settings"/>
      </div>
      <div>
          <Login heading="Login"/>
          <Contactus heading="Contact Us"/>
      </div>
      <div>
          <Search heading="Search"/>
          <Help heading="Help"/>
      </div>
      <div>
          <Home heading="Home"/>
          <Download heading="Download"/>
      </div>
      

      

    </div>
  );
}

export default App;
