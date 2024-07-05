import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import Pages from './containers/Pages/Pages';

const App = () => {

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className='container flex-grow-1'>
        <Routes>
          <Route path='/' element={<Pages />} />
          <Route path='/pages/:pageName' element={<Pages />} />
          <Route path='*' element={<div className="text-center mt-5"><strong>Данной страницы не найдено вернитесь
            пожалуйста обратно!</strong></div>} />
        </Routes>
      </main>
      <footer className='bg-success'>
        <div className="container text-center">
          <p className='my-4 text-light'>Made by Denis Khrunev student Attractor school 2024</p>
        </div>
      </footer>
    </>
  );
};

export default App;
