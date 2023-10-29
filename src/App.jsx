import { Routes, Route} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/event" Component={EventPage}/>
        <Route path="/" Component={ContactPage}/>
        <Route path="/" Component={RegisterPage}/>
        <Route path="/" Component={LoginPage}/>
      </Routes>
      <FooterComponent/>
    </>
  )
}

export default App
