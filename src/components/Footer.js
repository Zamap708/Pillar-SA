import React from "react";
import "./footer.css";
import footerLogo from "../assets/images/Pillar-logo-text.png";
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"

export default function Footer() {
    return (
        <footer>

            <div className="footer-content">
                
                <div className="specific-contact-info footer-seperator">
                    <div className="footer-logo-wrapper">
                        <img src={footerLogo} className="footer-logo" alt="Pillar South Africa logo" />
                        <p className="footer-logo-text">
                            Pillar South Africa has been present in the placement and business administration areas since 2018, serving small to large sized entities within the private and public sector
                        </p>
                    </div>
                </div>
                
                <div className="general-contact-info footer-seperator">
                    <h2 className="footer-subtitle">Contact Us</h2>

                    <div className="contact-column-wrapper">
                        
                        <div className="contact-column">
                            <h4 className="footer-contact-subtitle">Resumes</h4>
                            <p className="footer-contact-text">resumes@pillarsouthafrica.co.za</p>
                            <h4 className="footer-contact-subtitle">Administration</h4>
                            <p className="footer-contact-text">thando@pillarsouthafrica.co.za</p>
                            <h4 className="footer-contact-subtitle">Accounts</h4>
                            <p className="footer-contact-text">accounts@pillarsouthafrica.co.za</p>
                        </div>

                        <div className="contact-column">
                            <h4 className="footer-contact-subtitle">General Queries</h4>
                            <p className="footer-contact-text">info@pillarsouthafrica.co.za</p>
                            <p className="footer-contact-text">+27 (0) 87 265 8612</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="social-media-wrapper">
                <div className="social-media-links">
                    <div className="link">
                        <a href="" target={"_blank"}>
                            <img src={facebook} alt="Facebook" className="social-media-icon"/>
                        </a>
                    </div>
     
                    <div className="link">
                        <a href="" target={"_blank"}>
                            <img src={linkedin} alt="linkedin" className="social-media-icon"/>
                        </a>
                    </div>

                    <div className="link">
                        <a href="" target={"_blank"}>
                            <img src={instagram} alt="instagram" className="social-media-icon"/>
                        </a>
                    </div>                        
                </div>
            </div>
            
        </footer>
    )
}