import React from 'react';
import './css/AboutUs.css';

const AboutUs = () => {
    return (
        <section className="about-us">
            <h2>About Us</h2>
            <p className="about-us-description">
                Payas Technologies is a leading IT hub specializing in IT Training, Placement, and Recruitment.
                We focus on equipping individuals with cutting-edge skills and connecting them with top career opportunities.
                Having trained over 25,000 professionals globally, we are committed to excellence and client satisfaction.
                Our innovative approach and deep industry insight make us a trusted partner for skill enhancement,
                talent acquisition, and staying ahead in the competitive digital realm.
            </p>
            <div className="about-us-features">
                <div className="feature-box">
                    <div className="icon">&#x1F4BB;</div>
                    <h3>Comprehensive IT Training</h3>
                    <p>
                        Offering hands-on experience through live projects and up-to-date training modules, ensuring that
                        students acquire practical skills and industry-relevant knowledge.
                    </p>
                </div>
                <div className="feature-box">
                    <div className="icon">&#x1F393;</div>
                    <h3>Robust Placement</h3>
                    <p>
                        Providing dedicated placement assistance and recruiting well-trained candidates, connecting top talent
                        with leading global companies like Microsoft, Google, and Oracle.
                    </p>
                </div>
                <div className="feature-box">
                    <div className="icon">&#x1F4A1;</div>
                    <h3>Expertise and Innovation</h3>
                    <p>
                        Leveraging over 20 years of experience with a team of 100+ domain experts, utilizing a
                        technology-driven approach to deliver high-quality training and development solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
