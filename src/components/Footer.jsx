import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Footer() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <p>Copyright Team 6</p>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
