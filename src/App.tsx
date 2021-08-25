import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <Sidebar/>
        <Content/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
