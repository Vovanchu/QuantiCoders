import "./App.scss";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
