import { Box, Typography } from "@mui/material";
import { IconType } from "react-icons";

interface PerkCardProps {
  title: string;
  Icon: IconType;
}

const PerkCard: React.FC<PerkCardProps> = ({ title, Icon }) => {
  return (
    <Box
      sx={{
        width: '150px',
        padding: '1.5em',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
        transition: '0.3s',
        cursor: 'pointer',
        "&:hover": {
          transform: 'translateY(-5px)'
        }
      }}
    >
      <Icon style={{ fontSize: 40 }} />

      <Typography mt={1} fontWeight="500">
        {title}
      </Typography>
    </Box>
  );
};

export default PerkCard;
