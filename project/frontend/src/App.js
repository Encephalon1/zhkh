import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  );
}

export default App;
