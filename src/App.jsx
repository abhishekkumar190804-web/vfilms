import React from 'react';
import RouteLoad from './components/Loader';
import { Routes, Route, Navigate } from 'react-router';
import Navbar from './components/navbar';
import { bgImg } from './assets';
import { services } from './config';
const Home = React.lazy(() => import('./pages/home.page'));
const About = React.lazy(() => import('./pages/about.page'));
const Teams = React.lazy(() => import('./pages/teams.page'));
const Services = React.lazy(() => import('./pages/services'));
const Portfolio = React.lazy(() => import('./pages/portfolio.page'));
const Contact = React.lazy(() => import('./pages/contact.page'));
const Service = React.lazy(() => import('./pages/services/service.page'));

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-center bg-cover bg-blend-multiply min-h-screen flex justify-center"
    >
      <Navbar />
      <React.Suspense fallback={<RouteLoad />} />
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="/services">
          <Route index element={<Services />} />
          {services.map(({ url, data }, i) => (
            <Route key={i} path={url} element={<Service data={data} />} />
          ))}
          <Route path="*" element={<Navigate to="/services" />} />
        </Route>
        <Route path="teams" element={<Teams />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
