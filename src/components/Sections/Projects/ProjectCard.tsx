import { Box, Typography } from "@mui/material";
import { IProjectCard } from "../../../Types/Types";

const ProjectCard = ({
  img,
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
        borderRadius: "6px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color:"black"
      }}
    >
      {/* Image */}
      <Box sx={{ width: "100%", height: "180px", position: "relative" }}>
        <img
          src={img || "/images/placeholder.png"}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Title */}
      <Typography
        sx={{ fontSize: "1.2em", fontWeight: 600, mt: 1, px: 1 }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{ fontWeight: 300, fontSize: ".9em", mb: 2, mt: 0.5, px: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProjectCard;
