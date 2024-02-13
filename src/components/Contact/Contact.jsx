import "./Contact.css"


export const Contact = () => {
    return(
        <section id="contact" className="contact">
            <h3>Contact Us</h3>
            <div className="contact-info">
                <p>
                    If you have any questions or would like to book a trip, please fill
                    out the form below or contact us using the information provided.
                </p>
                <ul>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>123 Main St, Anytown USA
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:info@travelcompany.com">info@travelcompany.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i><a href="tel:555-123-4567">555-123-4567</a>
                    </li>
                </ul>
                </div>
                <form action="#" className="form">
                <div className="form-group">
                    <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    />
                </div>
                <div className="form-group">
                    <textarea
                    name="textarea"
                    id="textarea"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                    ></textarea>
            </div>
            <button type="submit">Send Message</button>
            </form>
        </section>
    )
}