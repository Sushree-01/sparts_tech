import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Academy } from "./Pages/Academy";
import { Testinomial } from "./Pages/Testinomial";
// import { Navbar } from "./Components/Navbar";
// import { Header } from "./Components/Header";
// import { Academy } from "./Pages/Academy";
// import { Testinomial } from "./Pages/Testinomial";
// import { Footer } from "./Components/Footer";

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
