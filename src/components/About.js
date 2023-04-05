import React from "react";
import { useState } from "react"
import "./about.css"
import "./faq.css"

// import video from "../assets/images/long-video-background.mp4";

export default function About() {

    const [viewMore, setViewMore] = useState({ "1": false, "2": false })
    console.log(viewMore[1])
    
    const toggleView = (e) => {
        let id = e.target.id;
        setViewMore(prev => ({
            ...prev,
            [id]: !prev[id]
        }));

    }

    const [viewServices, setViewServices] = useState({
        service1: false,
        service2: false,
        service3: false,
        service4: false,
        service5: false,
        service6: false,
    })

    const toggleServices = (e) => {
        const active = e.target.id;
        console.log(active)
     
        setViewServices(prevState => {
          const newState = {};
          for (const key in prevState) {
            newState[key] = false;
          }
          return {
            ...newState,
            [active]: !prevState[active]
          };
        });
    }
      

    // const handleHover = (e) => {
    //     // console.log("We hovered!")
    //     const sibling = e.target.nextSibling;
    //     sibling.classList.toggle("service-text-hover")
    // }

    return (
        <div className="about">
            <div className="quote-wrapper">
                <h1 className="quote">
                Pillars add strength and integrity to a building.
                In structural engineering, pillars support heavy loads above them.
                </h1>
            </div>

            <div className="about-content-wrapper section">
{/*                 
                // <video autoPlay muted loop>
                //     <source src={video} />
                // </video> */}
                <div className="about-text-wrapper">
                    <h2 className="about-title">
                        About Us
                    </h2>
                    <p className="about-text">
                        We are a fast-paced, attentive and sharp company. Intrust us with all your organisational requirements, pillar to pillar. <br />
                        We pride ourselves on service excellency and tending to the needs of our clients at unprecedented speed.
                        We operate tirelessly around the clock, available to our clients whenever they require our services.
                    </p>
                    
                </div>
               
            </div>

            <div className="services-wrapper section">
                <div className="service-title-wrapper">
                    <h2 className="service-title">
                        Placement And Brokering
                    </h2>
                </div>
                
                <div className="service-text-wrapper placement-bg">

                    <div className={"service left" + (viewServices.service1 ? " full-size" : " minimized-size" )}>
                        <div className="service-subtitle-wrapper">
                            <h3 className="service-subtitle"
                                id="service1"
                                onClick={toggleServices}
                            >Retained and Contingency Placements</h3>
                        </div>
                        <div className="service-content">
                        {viewServices.service1 ? <><p className="service-text">
                            Retained placements will see the client commit upfront to retaining the firms' services on a particular job.
                            This in turn implies exclusivity in that the job will only be filled through only our recruitment firm. <br />
                            Contigency placements will essentially see the firm bidding for the job by putting forward its best candidates and
                            only once the client organisation has decided on one of our candidates then the firm will go ahead with charging.
                        </p>
                            <p className="view-more-toggle"
                                id="1"
                                style={{display: viewMore[1] && viewServices.service1 ? "none" : "block" }}
                                onClick={toggleView}>View More</p></> : ""}
                        {viewMore[1] && viewServices.service1 ? <div className="more-services fade-in">
                            <h3>Permanent Placement</h3>
                            <p className="service-text">
                                Procuring our services to source and place an employee to work for an undetermined period;
                                in which the firm's fee is charged at a percentage of the employees' annual salary for a single year.
                            </p>
                            <h3>Contract Placement</h3>
                            <p className="service-text">
                                Procuring our services to source and place an employee to work for a fixed period;
                                in which the firm's fee is charged at a percentage of the employees' period of work (under a single year;
                                over a year would then stipulate the permament placement terms).
                            </p>
                            <p className="view-more-toggle" id="1" onClick={toggleView}>View Less</p>
                        </div> : ""} 
                        </div>
                        
                    </div>

                    <div className={"service center" + (viewServices.service2 ? " full-size" : " minimized-size" )}>
                        <div className="service-subtitle-wrapper">
                            <h3 className="service-subtitle"
                                onClick={toggleServices}
                                id="service2"
                            >Labour Brokerage and Outsourcing</h3>
                        </div>

                        <div className="service-content">
                            {viewServices.service2 ? <><p className="service-text">
                                As a brokerage firm, we employ workforce on behalf of the client organisation. The employee is paid and
                                managed by the firm but is deployed to work for the client organisation. These services can be temporary or
                                long-term basis.
                            </p>
                            <p className="view-more-toggle" id="2" onClick={toggleView}>View More</p></>: ""}
                            {viewMore[2] && viewServices.service2 ? <div className="more-services fade-in">
                                <h3>Temporary Placement</h3>
                                <p className="service-text">
                                    Procuring our services as the firm to employ temporary/casual workforce for your disposal; in which the client
                                    organisation pays the firm along with handling fees and the firm pays the employee. The firm additionally deals with all the
                                    employee related labour requirements
                                </p>
                                <h3>Outsourcing</h3>
                                <p className="service-text">
                                    Procuring our services as the firm to employ a workforce for your dispoal over a permanent/long term period for your disposal over
                                    a permanent/long term period (three(3) to five(5) years).
                                </p>
                                <p className="view-more-toggle" id="2" onClick={toggleView}>View Less</p>
                            </div> : ""}
                        </div>
                        
                       
                    </div>

                    <div className={"service right" + (viewServices.service3 ? " full-size" : " minimized-size" )}>
                        <div className="service-subtitle-wrapper">
                        <h3 className="service-subtitle"
                            id="service3"
                            onClick={toggleServices}
                            >Support Services</h3>
                        </div>

                        <div className="service-content">
                            {viewServices.service3 ? <p className="service-text">
                                This is to ensure that we meet you wherever you may need along the way,
                                there and in between. Add-ons such as the following: needs analysis, job description development,
                                industry trends, salary analysis, labour regulations, corporate culture, personality fit and competency tests
                            </p> : ""}
                        </div>
                 
                    </div>
                    
                </div>     
            </div>

            <div className="services-wrapper section">
                
                <div className="service-title-wrapper">
                    <h2 className="service-title">
                        Business Administration And Consulting
                    </h2>
                </div>
                
                <div className="service-text-wrapper business-bg">

                    <div className={"service left" + (viewServices.service4 ? " full-size" : " minimized-size" )}>
                        
                        <div className="service-subtitle-wrapper">
                            <h3 className="service-subtitle"
                                id="service4"
                                onClick={toggleServices}
                            >Human Resources</h3>
                        </div>
                        
                        <div className="service-content">
                            {viewServices.service4 ? <p className="service-text">
                                The firm offers to an extensive scope of support services to compliment and/or to strengthen
                                your already existing human resource function.
                            </p> : ""}
                        </div>
                      
                    </div>

                    <div className={"service center" + (viewServices.service5 ? " full-size" : " minimized-size" )}>
                        <div className="service-subtitle-wrapper">
                            <h3 className="service-subtitle"
                                id="service5"
                                onClick={toggleServices}
                            >Company Operations</h3>
                        </div>
                        
                        <div className="service-content">
                            {viewServices.service5 ? <p className="service-text">
                                The firm offers re-engineering of the client organisations current operation components by mapping out
                                current processes and systems, and improving to cut costs and ensure effective and efficient functioning.
                            </p> : ""}
                        </div>
                        
                    </div>

                    <div className={"service right" + (viewServices.service6 ? " full-size" : " minimized-size" )}>
                        
                        <div className="service-subtitle-wrapper">
                            <h3 className="service-subtitle"
                                id="service6"
                                onClick={toggleServices}
                            >Company Branding</h3>
                        </div>
                       
                        <div className="service-content">
                            {viewServices.service6 ? <p className="service-text">
                                The firm offers branding services to improve the image and customer experience if the client organisation.
                                A strong brand is more than just a logo - it's reflected in everything from your customer service style, staff uniforms, business cards and premises
                                to your marketing materials.
                            </p> : ""}
                        </div>
                        
                    </div>                   
                </div>     
            </div>
            
            <div className="faq section">
                <div className="service-title-wrapper">
                    <h2 className="faq-title">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="faq-bg">

                    <div className="faq-content">
                        <div className="faq-question-wrapper">
                            <p className="faq-question">
                                What is the average time to source?
                            </p>
                            <p className="faq-answer">
                                1-3 days for sourcing junior/mid-level vacancies,
                                5-7 days for headhunting and attracting mid-level/executive vacancies.
                                5-7 days for sourcing brokered and outsourced employees
                            </p>
                        </div>
                        <div className="faq-question-wrapper">
                            <p className="faq-question">
                                What is the cost of a bad hire?
                            </p>
                            <p className="faq-answer">
                                Our guarantee period per placements is 3 months.
                                This means if a placement falls during this period,
                                we replace them at no additoinal cost to you
                            </p>
                        </div>
                        <div className="faq-question-wrapper">
                            <p className="faq-question">
                                What tools/checks do you undertake to evaluate candidates?
                            </p>
                            <p className="faq-answer">
                                We do qualification, reference, ITC checks, criminal checks (require fingerprint).
                                We also offer psychometric, personality and competency tests at an additional cost.
                            </p>
                        </div>
    
                    </div>
                </div>
                

            </div>
        </div>
    )
}