import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignInFormInput from '../SignInFormInput/SignInFormInput';
import SignUpFormInput from '../SignUpFormInput/SignUpFormInput';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
    <Routes>
         <Route path="/signin" element={
            <>
              <Header modefi={"header_sign"} titleText={'Рады видеть!'} />
              <SignInFormInput buttonText={'Войти'} question={'Ещё не зарегистрированы?'} link={"/signup"} linkText={"Регистрация"} />
            </>   
        }/>
        <Route path='/signup' element={
          <>
            <Header modefi={"header_sign"} titleText={'Добро пожаловать!'} />
            <SignUpFormInput buttonText={'Зарегистрировать'} question={"Уже зарегистрированы?"} link={"/signin"} linkText={"Войти"} />
          </>
        } />
        <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} modefi={"header_blue"} />
              <Main />
              <Footer />
            </>
        } />

        <Route path="*" element={
            <>
                <NotFoundPage />
            </>
        } />  
    </Routes>
  );
}

export default App;
