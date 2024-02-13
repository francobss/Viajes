import "./Navbar.css"
import logo from "../../assets/logo.jpg"


export const Navbar = () => {
    return(
        <header>
            <div className="logo">
                <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <nav className="nav-menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#destinations">Destinations</a></li>
                    <li><a href="#hotels">Hotels</a></li>
                    <li><a href="#activites">Activities</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}