import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import Footer from './components/Footer';
import Quote from './components/Quote'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        {/* <Quote /> */}
        <About />
        <Footer />
      </main>     
    </div>
  );
}

export default App;
