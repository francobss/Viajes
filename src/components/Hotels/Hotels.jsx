import hotel1 from "../../assets/hotel-1.jpg"
import hotel2 from "../../assets/hotel-2.jpg"
import hotel3 from "../../assets/hotel-3.jpg"
import "../Destination/destination.css"

export const Hotels = () => {
    return(
        <section id="hotels" className="destinations">
            <h2>Featured Hotels</h2>
            <div className="destination-grid">
                <div className="destination-item">
                    <img src={hotel1} alt="" />
                    <h3>The Ritz Carlton</h3>
                    <p>
                    Experience luxury accommodations and impeccable service at The
                    Ritz Carlton, located in the heart of the city.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={hotel2} alt="" />
                    <h3>The Four Seasons</h3>
                    <p>
                    Relax in style at The Four Seasons, featuring breathtaking views,
                    an award-winning spa, and gourmet dining options.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={hotel3} alt="" />
                    <h3>The Waldorf Astoria</h3>
                    <p>
                    Indulge in luxury at The Waldorf Astoria, a historic landmark
                    hotel renowned for its elegance and sophistication.
                    </p>
                </div>
            </div>
        </section>
    )
}