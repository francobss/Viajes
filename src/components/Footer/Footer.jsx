import "./Footer.css"


export const Footer = () => {
    return(
        <footer>
            <div className="social-icons">
                <a href="https://www.facebook.com/" target="_blank"
                    ><i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com/" target="_blank"
                    ><i className="fab fa-twitter"></i>
                    </a>
                <a href="https://www.instagram.com/" target="_blank"
                    ><i className="fab fa-instagram"></i>
                </a>
            </div>
            <p>&copy; 2023 Your Travel Website. All Rights Reserved.</p>
        </footer>
    )
}