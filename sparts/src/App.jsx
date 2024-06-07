// import logo from './logo.svg';
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import { Academy } from "./Pages/Academy";
import { Testinomial } from "./Pages/Testinomial";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Academy />
      <Testinomial />
      <Footer />
    </div>
  );
}

export default App;
