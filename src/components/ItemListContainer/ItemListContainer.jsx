import { Destination } from "../Destination/Destination"
import { About } from "../About/About"
import { Activies } from "../Activies/Activies"
import { Hotels } from "../Hotels/Hotels"
import { Contact } from "../Contact/Contact"
import { Footer } from "../Footer/Footer"
import hero from "../../assets/hero.jpg"
import "./ItemListContainer.css"

export const ItemListContainer = () => {
    return( 
        <main>
            <section className="hero">
                <div className="hero-image">
                    <img src={hero} alt="Hero image" />
                    </div>
                    <div className="hero-content">
                    <h1>Welcome to Our Travel Website</h1>
                    <p>Discover amazing destinations and book your next trip with us.</p>
                    <a href="#" className="hero-button">Book Now</a>
                </div>
            </section>
            <Destination/>
            <Hotels/>
            <Activies/>
            <About/>
            <Contact/>
            <Footer/>
        </main>
    )
}