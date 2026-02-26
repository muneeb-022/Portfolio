import { Box, Typography } from "@mui/material";
import { IProjectCard } from "../../../Types/Types";

const ProjectCard = ({
  title,
  description
}: IProjectCard) => {
  return (
    <Box
      sx={{
        width: { xs: "250px", sm: "300px" },
        minWidth: "250px",
        maxWidth: "300px",
        background: "white",
        borderRadius: "8px",
        boxShadow: "rgba(0,0,0,0.1) 0px 2px 8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "black",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "rgba(0,0,0,0.3) 0px 10px 20px"
        },
        p: 2
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.4em",
          fontWeight: 700,
          mb: 1
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: 400,
          fontSize: "0.95em"
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProjectCard;