import './App.css';
import './custom.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Masthead from './components/Masthead';
import Portfolio from './main/portfolio/Portfolio';
import About from './main/about/About';
import Location from './main/location/Location';
import Client from './main/cv/Cv';
import Contact from './main/contact/Contact';
import Dashboard from './main/Home/Dashboard';

function App() {
  return (
    <>
        <Navbar />
        <Masthead />
        <Dashboard />
        <Portfolio />
        <About />
        <Location />
        <Contact />
        <Client />
        <Footer />       
    </>
  );
}

export default App;
