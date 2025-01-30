import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Games } from "./pages/Games";
import { ResponsibleGaming } from "./pages/ResponsibleGaming";
import { Terms } from "./pages/Terms";
import { Privacy } from "./pages/Privacy";
import Refund from "./pages/Refund";
import GameDescription from "./components/GameDescription";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow" style={{ width: "-webkit-fill-available" }}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/responsible-gaming" element={<ResponsibleGaming />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/game/:gameId" element={<GameDescription />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
