import React from 'react';
import About from '../components/About';
import Bot from '../components/Bot';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Hireme from '../components/Hireme';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skills from '../components/Skills';

const Common = () => {
    return (
        <div className='text-white'>
            <Navbar></Navbar>
            <Bot></Bot>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Hireme></Hireme>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Common;