import React, { useEffect } from "react";
import { useState } from "react"
import "./about.css"
import "./faq.css"
import { data } from "../servicesData";
import BEE from "./BEE";

// import video from "../assets/images/long-video-background.mp4";

export default function About() {

    // const [viewMore, setViewMore] = useState({ "1": false, "2": false })
    // console.log(viewMore[1])
    
    // const toggleView = (e) => {
    //     let id = e.target.id;
    //     setViewMore(prev => ({
    //         ...prev,
    //         [id]: !prev[id]
    //     }));
    // 

    const [viewServices, setViewServices] = useState({
        service1: {
            display: true,
            content: data.services[0].content,
            title: data.services[0].title
        },
        service2: {
            display: false,
            title: data.services[1].title,
            content: data.services[1].content
        },
        service3: {
            display: false,
            title: data.services[2].title,
            content: data.services[2].content
        },
        service4:  {
            display: false,
            title: data.services[3].title,
            content: data.services[3].content
        },
        service5: {
            display: false,
            title: data.services[4].title,
            content: data.services[4].content
        },
        service6: {
            display: false,
            title: data.services[5].title,
            content: data.services[5].content
        },
    })

    const [content, setContent] = useState(data.services[0].content)
    const [title, setTitle] = useState(data.services[0].title)
    const [moreContent, setMoreContent] = useState([])

    const moreContentRender = moreContent.map((data) => {
        return (
            <div className="moreContent">
                <h3 className="moreContent-title">
                    {data.title}
                </h3>
                <p className="service-text">
                    {data.content}
                </p>
            </div>
        )
    })

    const toggleServices = (e) => {
        const active = e.target.id;
        console.log(active)
     
        setViewServices(prevState => {
          const newState = {...prevState};
            for (const key in prevState) {
            newState[key].display = false;
            }
            newState[active].display = true
            
          return {
            ...newState
          };
        });
        console.log(viewServices)
        setContent(viewServices[active].content)
        setTitle(viewServices[active].title)

        console.log(moreContent)
    }

    

    useEffect(() => {
        if (viewServices.service1.display) {
            setMoreContent(data.services[0].more)
        } else if (viewServices.service2.display) {
            setMoreContent(data.services[1].more)
        }
        else {
            setMoreContent([])
        }
    },
        [viewServices, content])


    return (
        <div className="about">
            <div className="quote-wrapper">
                <h1 className="quote">
                Pillars add strength and integrity to a building.
                In structural engineering, pillars support heavy loads above them.
                </h1>
            </div>

            <div className="about-content-wrapper section">

                <div className="about-text-wrapper">
                    <h2 className="about-title">
                        We are a fast-paced, attentive and sharp company. Intrust us with all your organisational requirements, pillar to pillar.
                        We pride ourselves on service excellency and tending to the needs of our clients at unprecedented speed.
                        We operate tirelessly around the clock, available to our clients whenever they require our services.
                    </h2>
                    <p className="service-text">
                        We are a fast-paced, attentive and sharp company. Intrust us with all your organisational requirements, pillar to pillar. <br />
                        We pride ourselves on service excellency and tending to the needs of our clients at unprecedented speed.
                        We operate tirelessly around the clock, available to our clients whenever they require our services.
                    </p>
                    
                </div>
               
            </div>

            <div className="services-wrapper section placement-bg">
                
                <div className="services-viewer">

                    <div className="service-title-wrapper">
                        <h2 className="service-title">
                            Placement And Brokering
                        </h2>
                    </div>                    
                    <div className="service-content">
                        <h2 className="moreContent-title">
                            {title}
                        </h2>

                        <p className="service-text">
                            {content}
                        </p>
                        {moreContentRender}
                    </div>
                    
                    <div className="service-text-wrapper ">
                    
                        <div className={"service left" + (viewServices.service1 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    id="service1"
                                    onClick={toggleServices}
                                >Retained and Contingency Placements</h3>
                            </div>                       
                        </div>

                        <div className={"service center" + (viewServices.service2 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    onClick={toggleServices}
                                    id="service2"
                                >Labour Brokerage and Outsourcing</h3>
                            </div>
                                        
                        </div>

                        <div className={"service right" + (viewServices.service3 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    id="service3"
                                    onClick={toggleServices}
                                >Support Services</h3>
                            </div>
                        </div>
                        
                    </div>

                </div>
            
            </div>

            <div className="mission-wrapper">
                <div className="mission-text-wrapper">
                    <h2 className="mission-title">Mission and Vision</h2>
                    <p className="mission-text">
                        To be accountable to the true need of organisation
                        efficiency and effectiveness. Ensuring top of the
                        class candidates that will adequately fill their roles
                        in achievement towards the larger goals of the client
                        organisation. <br/><br/>
                        To be frontline in addressing unemployment in South
                        Africa by serving job seekers. Ensuring candidates
                        are placed with organisations that are the best
                        match for them
                    </p>
                </div>
            </div>

            <div className="quote-wrapper">
                <h1 className="quote">
                Pillars add strength and integrity to a building.
                In structural engineering, pillars support heavy loads above them.
                </h1>
            </div>
            <BEE />
{/* 
            <div className="services-wrapper section business-bg">
                
                <div className="services-viewer">
                    
                    <div className="service-content">
                        <div className="service-title-wrapper">
                            <h2 className="service-title">
                                Placement And Brokering
                            </h2>
                        </div>
                        <p className="service-text">
                            {content}
                        </p>
                    </div>
                    
                    <div className="service-text-wrapper ">
                    
                        <div className={"service left" + (viewServices.service1 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    id="service1"
                                    onClick={toggleServices}
                                >Retained and Contingency Placements</h3>
                            </div>                       
                        </div>

                        <div className={"service center" + (viewServices.service2 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    onClick={toggleServices}
                                    id="service2"
                                >Labour Brokerage and Outsourcing</h3>
                            </div>
                                        
                        </div>

                        <div className={"service right" + (viewServices.service3 ? " full-size" : " minimized-size" )}>
                            <div className="service-subtitle-wrapper">
                                <h3 className="service-subtitle"
                                    id="service3"
                                    onClick={toggleServices}
                                >Support Services</h3>
                            </div>
                        </div>
                        
                    </div>

                </div>
            
            </div> */}
            
            <div className="faq section">

                <div className="faq-wrapper">
                    <div className="faq-content">
                        <div className="faq-title-wrapper">
                            <h2 className="mission-title">
                                Our Partners
                            </h2>
                        </div>
                        <div className="partners-grid">
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>
                </div>

                <div className="faq-wrapper">

                    <div className="faq-content">
                        <div className="faq-title-wrapper">
                            <h2 className="mission-title">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="faq-grid">
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
                            {/* <div className="faq-question-wrapper">
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
                            </div> */}
                        </div>

    
                    </div>
                </div>

            </div>
        </div>
    )
}