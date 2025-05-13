import React from 'react';
import MainNavbar from "../../components/main/Navbar/MainNavbar.jsx";
import Hero from "../../components/main/Hero/Hero.jsx";
import Features from "../../components/main/Features/Features.jsx";
import Testimonials from "../../components/main/Testimonials/Testimonials.jsx";
import CTA from "../../components/main/CTA/CTA.jsx";

/*
SEO Optimized Keywords:

CRM that drives sales
AI-powered CRM for lead tracking
CRM built by sales experts
Real-time conversation suggestions CRM
Lead conversion tracking software
Smart CRM for sales teams


Other features

5. Seamless Integration
Our CRM easily integrates with your existing tools, including email platforms, calendars, and communication channels, so you can work smarter without disrupting your workflow.

6. Automated Follow-Ups
Never lose touch with your leads. Schedule automated follow-up messages and reminders to keep the conversation going and maintain engagement.

7. Customizable Workflows
Tailor the CRM to fit your unique sales process. From setting lead priorities to creating custom pipelines, our CRM adapts to the way you work.

8. Built for Teams of All Sizes
Whether you're an independent entrepreneur or leading a large sales team, our CRM scales to meet your needs. Assign tasks, collaborate seamlessly, and track progress together.

9. Mobile-Friendly Access
Stay connected to your sales pipeline anytime, anywhere. With our mobile-friendly CRM, you’ll always have the tools to drive sales at your fingertips.

10. Advanced Reporting & Analytics
Dive deep into your sales data with advanced reporting tools. Identify trends, track KPIs, and uncover insights to continually improve your strategy.

 */
const Main = () => {

    return (
        <div className="min-h-screen">
            <MainNavbar/>
            <main>
                <Hero/>
                <Features/>
                <Testimonials/>
                <CTA/>
            </main>
        </div>
    )
};

export default Main;
