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
  const user = JSON.parse(window.sessionStorage.getItem("user"));

  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const requireAuth = (element) => {
    console.log("ta logeado? " + isLoggedIn);
    if (isLoggedIn) {
      return element;
    } else {
      return <Navigate to="/" replace />;
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [requireAuth]);

  return (
    <div className="App d-flex flex-column">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path="/main" element={requireAuth(<Main/>)} />
          <Route exact path='/income' element={requireAuth(<Income/>)}/>
          <Route exact path='/outcome' element={requireAuth(<Outcome/>)}/>       
          <Route exact path='/client' element={requireAuth(<Client/>)}/>
          <Route exact path='/profile' element={requireAuth(<ProfileUser/>)}/>
          <Route exact path='/profits'element={requireAuth(<Profits/>)}/>       
          <Route exact path='/employee' element={requireAuth(<CreateEmployee/>)}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </Router>
      <Footer/>

    </div>
  );
}

export default App;
