import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="bg-[#344e41]">
        <Box>
          <Typography variant="h6" className="font-bold text-white ">
            E-commerce App
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
