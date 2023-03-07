import React from "react";
import { useState } from "react";
import "./hero.css"

export default function Hero() {

    const [willSubmitResume, setWillSubmitResume] = useState(false)

    const handleResumeSubmission = () => {
        console.log(willSubmitResume)
        setWillSubmitResume(!willSubmitResume)
        console.log(willSubmitResume)
    }

    const handleSubmit = (e) => {
       
    }
    return (
        <div className="hero">

            <div className="hero-text-wrapper">

                <div className="hero-headings-wrapper">

                    <p className="hero-subtitle hero-text">Talent Acquisition | Human Resources | Business Consultancy</p>
                    <h1 className="hero-title">Focus on what you do, leave the rest to us.</h1>   
               
                </div>
                
                <div className="hero-subtext-wrapper">

                    <p className="hero-text">Pillar South Africa has been present in the placement and business administration areas since 2018,
                        serving small to large sized entities within the private and public sector</p>
                    <p className="hero-text">Our pillars of service are Placement and Labour Brokage services and; Business Administration and Consultancy</p>
                    
                </div>

                <button className="hero-btn">TAKE THE FIRST STEP</button>
            </div>

            <form className="hero-contact-form">
                <input type="text" placeholder="Name & surname"/>
                <input type="text" placeholder="Email address"/>
                <input type="tel" placeholder="Contact number"/>
                <input type="text" placeholder="Optional message"/>

                <p className="checkbox-title">I'm enquiring about?</p>

                <label htmlFor="resume">
                    <input type="checkbox" className="checkbox" name="query-type" id="resume" onChange={handleResumeSubmission} /> 
                    Resume Submissions
                </label>

                <label htmlFor="information">
                    <input type="checkbox" className="checkbox" name="query-type" id="information"/>
                    Information Desk
                </label>

                <label htmlFor="accounts">
                    <input type="checkbox" className="checkbox" name="query-type" id="accounts" />
                    Accounts Department
                </label>

                <label htmlFor="directors">
                    <input type="checkbox" className="checkbox" name="query-type" id="directors" />
                    Director's office
                </label>

                <input type="file" name="resume-file" id="upload-btn" />
                               
                <button className="submit-btn" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
      
    )
}