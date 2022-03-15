import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SignInFormInput from '../SignInFormInput/SignInFormInput';
import SignUpFormInput from '../SignUpFormInput/SignUpFormInput';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import movies from '../../utils/movies';
import HeaderNoAuth from '../HeaderNoAuth/HeaderNoAuth';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(true);

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
              <HeaderNoAuth modefi={"header_blue"} />
              <Main />
              <Footer />
            </>
        } />
        <Route path='/profile' element={
          <>
            <HeaderAuth modefi={""} />
            <Profile />
          </>
        } />
        <Route path='/movies' element={
          <>
            <HeaderAuth modefi={""} />
            <Movies cards={movies} />
            <Footer />
          </>
        } />
        <Route path='/saved-movies' element={
            <>
                <HeaderAuth modefi={""} />
                <SavedMovies cards={movies} />
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
