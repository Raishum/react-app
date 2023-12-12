import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Layout from './pages/Layout';
import Pricing from "./pages/Pricing";
import About from "./pages/About";



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="Login" element={<Login />} />
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="About" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



