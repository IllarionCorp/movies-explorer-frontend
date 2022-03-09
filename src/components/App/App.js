import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path='/' element={
            <>
              <Header />
              <Main />
            </>
        } />   
    </Routes>
  );
}

export default App;
