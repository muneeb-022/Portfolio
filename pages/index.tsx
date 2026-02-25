import { Box } from '@mui/material';
import type { NextPage } from 'next';
import Hero from '../src/components/Sections/Hero/Hero';
import Perks from '../src/components/Sections/Perks/Perks';
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout';
import { useEffect, useRef } from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';

const Home: NextPage = () => {
  const ball = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);

  // Sample static data for projects
  const projectsArray = [
    {
      title: "Hotel Management System",
      description: "Core Java GUI application for handling hotel bookings, customer records, billing and room allocation.",
      img: "/images/hotel-management.jpg",
      siteUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Arduino Obstacle Avoiding Robot",
      description: "Autonomous robotic car using Arduino and ultrasonic sensors to detect and avoid obstacles.",
      img: "/images/arduino.jpg",
      siteUrl: "#",
      repoUrl: "#"
    },
    {
      title: "Campus Event Management Web App",
      description: "Full-stack web application built with React.js & Node.js for managing campus events and registrations.",
      img: "/images/campus.jpg",
      siteUrl: "#",
      repoUrl: "#"
    }
  ];

  // Sample static data for icons
  const iconsArray = [
    { title: "React", svg: "<svg>...</svg>", filter: false, isBackend: false },
    { title: "Node.js", svg: "<svg>...</svg>", filter: false, isBackend: true }
  ];

  return (
    <Layout desc="Being a Developer, code to deploy, I do anything" title="Personal Portfolio">
      <Box sx={{ margin: '0 auto', color: 'white' }}>
        <Hero />
        <Perks />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />

        <Box
          ref={ball}
          sx={{ display: { xs: 'none', md: 'block' } }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;
