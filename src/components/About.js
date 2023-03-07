import React from "react";
import { useState } from "react"
import { useRef, useEffect } from 'react'
import "./about.css"
import "./faq.css"

export default function About() {

    const [viewMore, setViewMore] = useState({ "1": false, "2": false })
    console.log(viewMore[1])
    const toggleView = (e) => {
        let id = e.target.id;
        console.log(id)
        setViewMore(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
        console.log(viewMore)
    }

    const observer = useRef(null);
    useEffect(() => {
      observer.current = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("load-in"), 50)
            observer.current.unobserve(entry.target);
          }
        });
      }, {
        // rootMargin: "-100%",
        threshold: 0.2 
      });
    
      const sections = document.querySelectorAll(".section");
      sections.forEach(section => observer.current.observe(section));
    
      return () => {
        observer.current.disconnect();
      };
    }, []);
    

    return (
        <div className="about">

            <div className="about-text-wrapper section">
                <h2 className="about-title">
                    About Us
                </h2>
                <p className="about-text">
                    We are a fast-paced, attentive and sharp company. Intrust us with all your organisational requirements, pillar to pillar. <br />
                    We pride ourselves on service excellency and tending to the needs of our clients at unprecedented speed.
                    We operate tirelessly around the clock, available to our clients whenever they require our services.
                </p>
            </div>

            <div className="services-wrapper section">
                <h2 className="service-title">
                    PLACEMENT AND BROKERING
                </h2>
                <div className="service-text-wrapper">
                    <div className="service">
                        <h3 className="service-subtitle">Retained and Contingency Placements</h3>
                        <p className="service-text">
                            Retained placements will see the client commit upfront to retaining the firms' services on a particular job.
                            This in turn implies exclusivity in that the job will only be filled through only our recruitment firm. <br />
                            Contigency placements will essentially see the firm bidding for the job by putting forward its best candidates and
                            only once the client organisation has decided on one of our candidates then the firm will go ahead with charging.
                        </p>
                        {viewMore[1] ? <div className="more-services fade-in">
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
                        </div> : <p className="view-more-toggle" id="1" onClick={toggleView}>View More</p>}
                    </div>
                    <div className="service">
                        <h3 className="service-subtitle">Labour Brokerage and Outsourcing</h3>
                        <p className="service-text">
                            As a brokerage firm, we employ workforce on behalf of the client organisation. The employee is paid and
                            managed by the firm but is deployed to work for the client organisation. These services can be temporary or 
                            long-term basis.
                        </p>
                        {viewMore[2] ? <div className="more-services fade-in">
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
                        </div> : <p className="view-more-toggle" id="2" onClick={toggleView}>View More</p>}
                    </div>
                    <div className="service">
                        <h3 className="service-subtitle">Support Services</h3>
                        <p className="service-text">
                            This is to ensure that we meet you wherever you may need along the way,
                            there and in between. Add-ons such as the following: needs analysis, job description development,
                            industry trends, salary analysis, labour regulations, corporate culture, personality fit and competency tests
                        </p>
                    </div>                   
                </div>     
            </div>

            <div className="services-wrapper section">
                <h2 className="service-title">
                    Business Administration And Consulting
                </h2>
                <div className="service-text-wrapper">
                    <div className="service">
                        <h3 className="service-subtitle">Human Resources</h3>
                        <p className="service-text">
                            The firm offers to an extensive scope of support services to compliment and/or to strengthen
                            your already existing human resource function.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-subtitle">Company Operations</h3>
                        <p className="service-text">
                            The firm offers re-engineering of the client organisations current operation components by mapping out
                            current processes and systems, and improving to cut costs and ensure effective and efficient functioning.
                        </p>
                    </div>
                    <div className="service">
                        <h3 className="service-subtitle">Company Branding</h3>
                        <p className="service-text">
                            The firm offers branding services to improve the image and customer experience if the client organisation.
                            A strong brand is more than just a logo - it's reflected in everything from your customer service style, staff uniforms, business cards and premises
                            to your marketing materials.
                        </p>
                    </div>                   
                </div>     
            </div>

            <div className="team-wrapper section">
                <h2 className="service-title">Our Team</h2>
                <div className="team-content-wrapper">
                    <div className="team-member">
                        <h4 className="team-member-name">Thando Nene</h4>
                        <p className="team-member-dept">Administration</p>
                    </div>
                    <div className="team-member">
                        <h4 className="team-member-name">Lehlogonolo Mathibela</h4>
                        <p className="team-member-dept">Accounts</p>
                    </div>
                    <div className="team-member">
                        <h4 className="team-member-name">Donald Netshiweta</h4>
                        <p className="team-member-dept">Business Development Consultant</p>
                    </div>
                    <div className="team-member">
                        <h4 className="team-member-name">Tshepiso Mokgabudi</h4>
                        <p className="team-member-dept">CEO</p>
                    </div>
                    <div className="team-member">
                        <h4 className="team-member-name">Tatiana Mengsen</h4>
                        <p className="team-member-dept">Personal Assistant to CEO</p>
                    </div>
                </div>
            </div>
            

            <div className="faq section">
            <h2 className="faq-title">
                Frequently Asked Questions
            </h2>

            <p className="faq-question">
                What is the average time to source?
            </p>
            <p className="faq-answer">
                1-3 days for sourcing junior/mid-level vacancies,
                5-7 days for headhunting and attracting mid-level/executive vacancies.
                5-7 days for sourcing brokered and outsourced employees
            </p>

            <p className="faq-question">
                What is the cost of a bad hire?
            </p>
            <p className="faq-answer">
                Our guarantee period per placements is 3 months.
                This means if a placement falls during this period,
                we replace them at no additoinal cost to you
            </p>

            <p className="faq-question">
                What tools/checks do you undertake to evaluate candidates?
            </p>
            <p className="faq-answer">
                We do qualification, reference, ITC checks, criminal checks (require fingerprint).
                We also offer psychometric, personality and competency tests at an additional cost.
            </p>

            <p className="faq-question"></p>
            <p className="faq-answer"></p>

        </div>
        </div>
    )
}