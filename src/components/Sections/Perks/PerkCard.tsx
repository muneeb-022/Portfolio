import { Box, Typography } from "@mui/material";
import { IconType } from "react-icons";
import React from "react";

interface PerkCardProps {
  title: string;
  Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

const PerkCard = ({ title, Icon }: PerkCardProps) => {
  return (
    <Box
      sx={{
        width: "150px",
        padding: "1.5em",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      <Icon size={40} />

      <Typography mt={1} fontWeight="500">
        {title}
      </Typography>
    </Box>
  );
};

export default PerkCard;