import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Routes>
        <Route path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
        } />   
    </Routes>
  );
}

export default App;
