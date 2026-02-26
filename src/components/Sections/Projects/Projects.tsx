import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";
import { IProjectCard } from "../../../Types/Types";

interface ProjectsProps {
  projectsArray: IProjectCard[];
}

const Projects = ({ projectsArray }: ProjectsProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");

    projectsArray.forEach((_, i) => {
      gsap.from(`.p${i}`, {
        x: 200,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.p${i}`,
          start: "top 70%"
        }
      });
    });
  }, [projectsArray]);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth"
    });
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container id="ProjectSection" maxWidth="lg" sx={{ py: "6em" }}>
        <Grid container justifyContent="center">
          {/* Title */}
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              className="title3 t25o0"
              variant="h1"
              fontWeight="600"
              sx={{ fontSize: { xs: "2.2em", sm: "2.5em", md: "3em" } }}
            >
              Successful Projects I&apos;m Proud Of
            </Typography>

            <Typography
              className="title4 t25o0"
              variant="h2"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                mx: "auto",
                fontSize: { xs: ".8em", sm: "1em" }
              }}
            >
              Real-world systems built with scalable architectures.
            </Typography>
          </Grid>

          {/* Controls */}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "2em",
              mb: "1em"
            }}
          >
            <Button onClick={() => scroll("left")}>◀</Button>
            <Button onClick={() => scroll("right")}>▶</Button>
          </Grid>

          {/* Carousel */}
          <Box
            ref={carouselRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: "2rem",
              scrollSnapType: "x mandatory",
              px: 1,
              "&::-webkit-scrollbar": { display: "none" }
            }}
          >
            {projectsArray.map((project, index) => (
              <Box
                key={project.title}
                sx={{
                  flex: "0 0 300px",
                  scrollSnapAlign: "start",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <ProjectCard
                  className={`p${index}`}
                  title={project.title}
                  description={project.description}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Container>

      <Divider />
    </Box>
  );
};

export default Projects;