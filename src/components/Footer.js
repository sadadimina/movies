import react from "react";
import '../styles.css';

export default function Footer(){

    const CurrentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <p className="footer-text">
                © {CurrentYear} Moviedux , All rights Reserved.
            </p>
        </footer>
    )
}