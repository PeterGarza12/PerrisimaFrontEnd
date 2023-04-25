import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/footer';

import { Login } from './Pages/Login/Login';
import { Main } from './Pages/Main/Main';
import { Income } from './Pages/Income/Income';
import { Outcome } from './Pages/Outcome/Outcome';
import { Client } from './Pages/Client/Client';
import { ProfileUser } from './Pages/Profile/Profile';
import { CreateEmployee } from './Pages/CreateEmployee/CreateEmployee';
import Error404 from './Pages/Error/Error404';

function App() {
  return (
    <div className="App d-flex flex-column">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/'         element={<Login/>}>         </Route>
          <Route exact path='/main'     element={<Main/>}>          </Route>
          <Route exact path='/income'   element={<Income/>}>        </Route>
          <Route exact path='/outcome'  element={<Outcome/>}>       </Route>
          <Route exact path='/client'   element={<Client/>}>        </Route>
          <Route exact path='/profile'  element={<ProfileUser/>}>   </Route>
          <Route exact path='/employee' element={<CreateEmployee/>}></Route>
          <Route path='*'               element={<Error404/>}>      </Route>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;

      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */