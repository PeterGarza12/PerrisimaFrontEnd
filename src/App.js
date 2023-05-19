import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/footer';
import { useEffect, useState } from 'react';
import { Login }          from './Pages/Login/Login';
import { Main }           from './Pages/Main/Main';
import { Income }         from './Pages/Income/Income';
import { Outcome }        from './Pages/Outcome/Outcome';
import { Client }         from './Pages/Client/Client';
import { ProfileUser }    from './Pages/Profile/Profile';
import  Profits           from './Pages/Profits/Profits';
import { CreateEmployee } from './Pages/CreateEmployee/CreateEmployee';
import Error404           from './Pages/Error/Error404';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = window.sessionStorage.getItem('user');
    setIsLoggedIn(!!user); // Set isLoggedIn based on the presence of the user
  }, []);

  return (
    <div className="App d-flex flex-column">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}>         </Route>
          <Route exact path='/main'
            element={ isLoggedIn ? 
              <Main/> : <Navigate to="/"/>
              }>          </Route>
          <Route exact path='/income'
            element={ isLoggedIn ? 
            <Income/> : <Navigate to="/"/>
            }>        </Route>
          <Route exact path='/outcome'
            element={ isLoggedIn ? 
            <Outcome/> : <Navigate to="/"/>
            }>       </Route>
          <Route exact path='/client'
            element={ isLoggedIn ? 
            <Client/> : <Navigate to="/"/>
            }>        </Route>
          <Route exact path='/profile'
            element={ isLoggedIn ? 
            <ProfileUser/> : <Navigate to="/"/>
            }>   </Route>
          <Route exact path='/profits'
            element={ isLoggedIn ? 
            <Profits/> : <Navigate to="/"/>
            }>       </Route>
          <Route exact path='/employee'
            element={ isLoggedIn ? 
            <CreateEmployee/> : <Navigate to="/"/>
            }></Route>
          <Route path='*' element={<Error404/>}>      </Route>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
