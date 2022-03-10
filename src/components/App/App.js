import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Form from '../Form/Form';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
    <Routes>
         <Route path='/signin' element={
            <>
              <Header modefi={"header_sign"} titleText={'Рады видеть!'}/>
               <Form buttonText={'Войти'}/>
            </>   
        }/>
        <Route path='/' element={
            <>
              <Header loggedIn={loggedIn} modefi={"header_blue"} />
              <Main />
              <Footer />
            </>
        } />   
    </Routes>
  );
}

export default App;
