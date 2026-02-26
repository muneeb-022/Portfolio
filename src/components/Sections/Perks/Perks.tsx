import { Box, Container, Typography, Divider } from '@mui/material';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import PerkCard from './PerkCard';

// React Icons
import {
  SiKotlin,
  SiFlutter,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDocker,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiGit,
  SiGithub
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

// Centered container style
export const centeredStyles = {
  alignItems: 'center',
  textAlign: 'center',
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
};

// Full skills array
const skillsArray = [
  { title: "Kotlin", Icon: SiKotlin },
  { title: "Flutter", Icon: SiFlutter },
  { title: "C++", Icon: SiCplusplus },
  { title: "JavaScript", Icon: SiJavascript },
  { title: "React.js", Icon: SiReact },
  { title: "Node.js", Icon: SiNodedotjs },
  { title: "Express.js", Icon: SiExpress },
  { title: "Docker", Icon: SiDocker },
  { title: "Kubernetes", Icon: SiKubernetes },
  { title: "Grafana", Icon: SiGrafana },
  { title: "Prometheus", Icon: SiPrometheus },
  { title: "Git", Icon: SiGit },
  { title: "GitHub", Icon: SiGithub },
  { title: "CI/CD", Icon: SiGithub } // placeholder for CI/CD
];

const Perks = () => {
  useEffect(() => {
    MainTitleAnimation('.h1', '.h2');
  }, []);

  return (
    <>
      <Container
        id="skills"
        maxWidth="lg"
        sx={{
          margin: '0 auto',
          my: '5em'
        }}
      >
        <Box sx={centeredStyles}>
          {/* Section Title */}
          <Typography
            className="h1 t25o0"
            variant="h1"
            fontWeight={600}
            sx={{ fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' } }}
          >
            My Technical Skills
          </Typography>

          <Typography
            variant="h2"
            className="secondary h2"
            sx={{
              pt: '1.5em',
              transform: 'translateY(15px)',
              opacity: 0,
              maxWidth: '600px',
              fontSize: { xs: '.85em', sm: '1em' }
            }}
          >
            I build scalable backend systems, responsive frontends, mobile apps, and production-ready DevOps pipelines.
          </Typography>

          {/* Skills Grid */}
          <Box
            sx={{
              mt: '3em',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              justifyContent: 'center'
            }}
          >
            {skillsArray.map(skill => (
              <PerkCard
                key={skill.title}
                title={skill.title}
                Icon={skill.Icon as React.ComponentType<{ size?: number }>} // type casting ensures TS compliance
              />
            ))}
          </Box>
        </Box>
      </Container>

      <Divider />
    </>
  );
};

export default Perks;