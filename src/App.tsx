import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar />
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
