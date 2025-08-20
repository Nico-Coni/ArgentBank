import { Hero } from "../components/Hero";
import React from 'react';
import { Features } from "../containers/Features";

function Home() {
    return (
        <main>
            <Hero />
            <Features />
        </main>
    );
}

export default Home;