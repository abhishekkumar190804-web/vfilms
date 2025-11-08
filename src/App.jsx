import { Routes, Route } from 'react-router';
import Home from './pages/home.page';
import Navbar from './components/navbar';
import { bgImg } from './assets';
import Teams from './pages/teams.page';
import About from './pages/about.page';
import Services from './pages/services';
import { services } from './config';
import Portfolio from './pages/portfolio.page';
import Contact from './pages/contact.page';

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover bg-blend-multiply min-h-screen flex justify-center"
    >
      <Navbar />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="/services">
          <Route index element={<Services />} />
          {services.map(({ url, i }) => (
            <Route key={i} path={url} element={<Services />} />
          ))}
        </Route>
        <Route path="teams" element={<Teams />} />
        <Route path="about" element={<About />} />
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
};

export default App;
