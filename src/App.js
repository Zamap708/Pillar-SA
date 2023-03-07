import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <About />
        {/* <FAQ /> */}
        <Footer />
      </main>     
    </div>
  );
}

export default App;
