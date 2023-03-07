import React from "react";
import "./faq.css"

export default function FAQ() {
    return (
        <div className="faq">
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
    )
}