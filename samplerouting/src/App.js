import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Crud from './Components/Crud';
import CrudWebapi from './Components/CrudWebapi';
import Registartion from './Components/Registartion';
import class1 from './MyPractice/class1';
import LetsConnect from './Components/letsConnect';
import { Calendar } from 'antd';
import CalendarView from './Components/CalendarView';
import ShareThoughts from './Components/ShareThoughts';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
      {/* <Routes> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/home" component={Home} />
        <Route path="/crud" component={Crud}/>
        <Route path="/newcrud" component={CrudWebapi}/>
        <Route path="/registartion" component={Registartion}/>
        <Route path="/class1" component={class1}/>
        <Route path="/letsconnect" component={LetsConnect}/>
        <Route path="/calendarView" component={CalendarView}/>
        <Route path='/sharethouths' component={ShareThoughts}/>
        <Route path='/signup' component={Signup}/>
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
