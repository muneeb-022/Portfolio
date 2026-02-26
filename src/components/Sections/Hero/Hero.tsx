import { Box, Button, Container, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';
import Image from 'next/image';
import img1 from '../../../../public/images/img1.jpeg';

export const btnStyles = {
  padding: '.77em 1.5em',
  borderRadius: '3px',
};

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(ref);
  gsap.registerPlugin(ScrollToPlugin);

  useEffect(() => {
    HeroSectionAnimation(q);
  }, [q]);

  return (
    <Container
      id="hero"
      maxWidth="lg"
      sx={{
        margin: '0 auto',
        py: { xs: '7.5em', sm: '8.5em' },
      }}
    >
      <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Text */}
        <Grid item xs={12} sm={10} md={8} lg={7}>
          <Box ref={ref}>
            <Typography
              className="t1"
              variant="h1"
              sx={{
                fontSize: { xs: '1.4em', sm: '1.4em', md: '1.8em' },
                textAlign: 'left',
                transform: 'translateY(40px)',
                opacity: 0,
                pt: '1em',
                fontWeight: 600,
              }}
            >
              MERN STACK | MOBILE DEVELOPER | DevOps Engineer
            </Typography>

            <Typography
              variant="h2"
              className="secondary t2 t25o0"
              sx={{
                textAlign: 'left',
                pt: '1.5em',
                fontSize: { xs: '.9em', sm: '1em' },
                maxWidth: '570px',
                fontWeight: 300,
              }}
            >
              Assalam O Alaikum! I'm Muneeb. I enjoy creating websites and web/mobile apps using the latest technologies and clean design patterns. I deploy applications on servers and monitor them.
            </Typography>

            <Box
              sx={{
                my: '2.5em',
                gap: '.8em',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Button
                sx={{
                  opacity: 0,
                  borderRadius: 0,
                  padding: '.75em 2.5em',
                  flex: { xs: 1, sm: 'inherit' },
                }}
                onClick={() => gsap.to(window, { duration: 2, scrollTo: '#ProjectSection' })}
              >
                View Projects
              </Button>

              <a href={``} target="_blank" rel="noreferrer">
                <Button
                  sx={{
                    ...btnStyles,
                    opacity: 0,
                    height: 'max-content',
                    padding: '1em 1.5em',
                    width: { xs: '100%', sm: 'auto' },
                    ':hover': { color: '#0092ff' },
                  }}
                  variant="text"
                >
                  <Typography fontSize="14px">View Resume</Typography>
                </Button>
              </a>
            </Box>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5}
          sx={{
            mb: { xs: '3.5em', sm: '4em', lg: '1em' },
            mr: { sm: '1em', md: '2em', lg: '0em' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              borderRadius: '6px',
              width: { xs: '100%', sm: '350px', md: '400px' },
              height: '460px',
              position: 'relative',
              boxShadow: { xs: '.5em 3em 0 #313131', sm: '2em 3em 0px #313131' },
              overflow: 'hidden',
            }}
          >
            <Image
              src={img1}
              alt="Personal Image"
              layout="fill"
              objectFit="cover"
              className="img1"
              unoptimized // ✅ prevents Netlify WASM errors
            />

            <Box
              className="gradientBg"
              sx={{
                width: '100px',
                height: '100px',
                zIndex: 0,
                position: 'absolute',
                right: { xs: '-1%', sm: '-5%' },
                bottom: '-5%',
                background: 'radial-gradient(white 2px, transparent 0)',
                backgroundSize: '15px 13px',
                opacity: 0,
              }}
            />

            <Box
              className="quoteBox"
              sx={{
                zIndex: 2,
                position: 'absolute',
                bottom: { xs: '0%', lg: '-5%' },
                width: '100%',
                right: { sm: '25%' },
                top: '105%',
                overflow: 'hidden',
                opacity: 0,
                background: '#0092ff',
              }}
            >
              <Typography sx={{ fontWeight: 300, fontSize: '.85em', padding: '1em' }}>
                "From code to Cloud, I do anything"
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;