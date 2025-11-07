import { Routes, Route } from 'react-router';
import Home from './pages/home.page';
import Navbar from './components/navbar';
import { bgImg } from './assets';
import Teams from './pages/teams.page';
import About from './pages/about.page';

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover bg-repeat-y overflow-x-hidden min-h-screen"
    >
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        {/* <Route path='services' element={}/> */}
        <Route path="teams" element={<Teams />} />
        <Route path='about' element={<About/>}/>
        {/* <Route path='portfolio' element={}/> */}
        {/* <Route path='contact' element={}/> */}
      </Routes>
    </div>
  );
};

export default App;
