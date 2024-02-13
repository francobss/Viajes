import destination1 from "../../assets/destination-1.jpg"
import destination2 from "../../assets/destination-2.jpg"
import destination3 from "../../assets/destination-3.jpg"
import "./destination.css"


export const Destination = () => {
    return(
        <section id="destinations" className="destinations">
            <h2>Popular Destinations</h2>
            <div className="destination-grid">
                <div className="destination-item">
                    <img src={destination1} alt="" />
                    <h3>New York City</h3>
                    <p>
                    Visit the city that never sleeps and discover its iconic
                    landmarks, world-className museums, and diverse neighborhoods.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={destination2} alt="" />
                    <h3>Paris</h3>
                    <p>
                    Experience the romance and culture of the City of Lights, from the
                    Eiffel Tower to the Louvre Museum.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={destination3} alt="" />
                    <h3>Tokyo</h3>
                    <p>
                    Explore the vibrant city of Tokyo and immerse yourself in its
                    unique blend of ancient traditions and modern technology.
                    </p>
                </div>
            </div>
        </section>
    )
}