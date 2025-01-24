import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ImgCarousel from './components/carousel/ImgCarousel';
import Destinations from './components/destinations/Destinations'
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero'
import Search from './components/search/Search';
import Selects from './components/selects/Selects';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Search /> 
      <Selects />
       <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
