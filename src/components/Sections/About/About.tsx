import { Container, Box, Grid, Typography } from '@mui/material';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const About = () => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Container
      id="about"
      maxWidth="lg"
      sx={{
        margin: '0 auto',
        py: '6em',
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: { sm: 'center', md: 'space-between' },
          alignItems: 'center',
          gap: { xs: '2em', md: 0 },
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} sm={12} md={4} lg={5}>
          <Box
            sx={{
              maxWidth: '400px',
              width: '100%',
              height: '450px',
              margin: '0 auto',
              boxShadow: {
                xs: '-.5em 1.5em 0px #0092ff',
                sm: '-1.5em 1.5em 0px #0092ff',
              },
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            {/* Decorative dots */}
            <Box
              sx={{
                width: '100px',
                height: '100px',
                zIndex: 0,
                position: 'absolute',
                right: { xs: '-4%', sm: '90%' },
                bottom: { xs: '-5%', sm: '-10%' },
                background: 'transparent',
                backgroundImage:
                  colorMode.mode === 'dark'
                    ? 'radial-gradient(white 2px, transparent 0)'
                    : 'radial-gradient(black 2px, transparent 0)',
                backgroundSize: '15px 13px',
              }}
            />

            {/* Static image compatible with next export */}
            <img
              src="/images/personal.jpeg" // Path relative to public/
              alt="Personal Image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Box sx={{ pb: '1em' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2em', sm: '2.5em', md: '3em' },
                py: '.5em',
                pt: { xs: '1.8em', md: 0 },
                fontWeight: 600,
              }}
            >
              About Me, I&apos;m a Developer
            </Typography>

            <Typography
              variant="h2"
              sx={{
                maxWidth: '570px',
                fontSize: { xs: '.9em', sm: '1em' },
                pb: '.5em',
              }}
            >
              I am an IT student at Bahria University with hands-on experience as a Junior MERN Stack Developer and Junior DevOps Engineer. I previously worked at Beenco Labs, contributing to application deployment, CI/CD pipelines, and cloud-based workflows.
            </Typography>

            <Typography
              variant="h2"
              sx={{
                maxWidth: '570px',
                fontSize: { xs: '.9em', sm: '1em' },
                pb: '.5em',
              }}
            >
              I enjoy working across the full development lifecycle—from planning and development to deployment and maintenance. I also have experience in web development, using modern frameworks and technologies to build responsive and scalable applications.
            </Typography>

            <ReadMore>
              I am passionate about delivering modern, efficient solutions and continuously improving my skills in DevOps, cloud technologies, and full stack development. I am eager to learn, grow, and contribute to impactful projects.
            </ReadMore>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;