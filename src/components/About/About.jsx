import teammember1 from "../../assets/team-member-1.jpg"
import teammember2 from "../../assets/team-member-2.jpg"
import teammember3 from "../../assets/team-member-3.jpg"
import "./About.css"

export const About = () => {
    return(
        <section id="about" className="about">
            <h3>About Us</h3>
            <p>
            Our company is dedicated to providing the best travel experiences to
            our customers. We specialize in creating custom itineraries that cater
            to each individual's interests and preferences.
            </p>
            <div className="team-members">
                <div className="team-member">
                    <img src={teammember1} alt="" />
                    <h4>John Smith</h4>
                    <p>Founder & CEO</p>
                </div>
                <div className="team-member">
                    <img src={teammember2} alt="" />
                    <h4>Jane Doe</h4>
                    <p>Head of Operations</p>
                </div>
                <div className="team-member">
                    <img src={teammember3} alt="" />
                    <h4>David Lee</h4>
                    <p>Marketing Director</p>
                </div>
            </div>
        </section>
    )
}