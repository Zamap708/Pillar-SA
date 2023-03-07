import React from "react";
import "./footer.css"

export default function Footer() {
    return (
        <footer>

            <div className="footer-contact-wrapper">
                <h2 className="m-10">Contact Us</h2>

                <div className="footer-content">
                    <div className="specific-contact-info footer-margin">
                        <h4 className="m-10">Resumes</h4>
                        <p className="m-10">resumes@pillarsouthafrica.co.za</p>

                        <h4 className="m-10">Administration</h4>
                        <p className="m-10">thando@pillarsouthafrica.co.za</p>

                        <h4 className="m-10">Accounts</h4>
                        <p className="m-10">accounts@pillarsouthafrica.co.za</p>
                    </div>
                    
                    <div className="general-contact-info footer-margin">
                        <h4 className="m-10">General Queries</h4>
                        <p className="m-10">Email: info@pillarsouthafrica.co.za</p>
                        <p className="m-10">Tel: +27 (0) 87 265 8612</p>
                    </div>

                    <div className="social-media-links footer-margin">
                        <h4 className="m-10">Social Media</h4>
                        <a href="" target={"_blank"}>Facebook</a>
                        <a href="" target={"_blank"}>LinkedIn</a>
                        <a href="" target={"_blank"}>Instagram</a>
                    </div> 
                </div>
                
            </div>

            <div className="footer-logo">
            </div>

        </footer>
    )
}