import { Outlet, Link } from "react-router-dom";
import "./Header.css"
import logo from "../gib.png"

const Layout = () => {
  return (
    <>
    <div class = "headerlinks">
        <img onClick={refreshPage} alt="‎" src= {logo}/>
        <Link class = "home" to="/">Home</Link>
        <Link class = "Pricing" to="Pricing">Pricing</Link>
        <Link class = "About" to="About">About</Link>
        <Link class = "Login" to="Login">Login</Link>
    </div>
    <Outlet/>
    </>
  )
};
function refreshPage() {
  window.location.reload(false);
}
export default Layout;