import activity1 from "../../assets/activity-1.jpg"
import activity2 from "../../assets/activity-2.jpg"
import activity3 from "../../assets/activity-3.jpg"
import "../Destination/destination.css"

export const Activies = () => {
    return(
        <section id="activites" className="destinations">
            <h2>Featured Activities</h2>
            <div className="destination-grid">
                <div className="destination-item">
                    <img src={activity1} alt="" />
                    <h3>The Ritz Carlton</h3>
                    <p>
                    Experience luxury accommodations and impeccable service at The
                    Ritz Carlton, located in the heart of the city.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={activity2} alt="" />
                    <h3>The Four Seasons</h3>
                    <p>
                    Relax in style at The Four Seasons, featuring breathtaking views,
                    an award-winning spa, and gourmet dining options.
                    </p>
                </div>
                <div className="destination-item">
                    <img src={activity3} alt="" />
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