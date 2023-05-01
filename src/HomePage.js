import React from "react";
import Intro from "./Intro";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

function HomePage() {
    return (
        <div>
        <Intro />
        <Specials />
        <Testimonials />
        <About />
        </div>
    );
}

export default HomePage;