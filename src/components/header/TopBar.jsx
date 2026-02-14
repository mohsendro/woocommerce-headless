"use client";

// React
import React from "react";

// MUI
import {
  Container,
  Grid,
  Box,
  Stack,
  Divider,
  Typography,
} from "@mui/material";

// Styles
import Styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <>
      <Box className={Styles["top-bar"]} component="section">
        <Container
          className={Styles["top-bar-section"]}
          component="div"
          maxWidth="lg"
        >
          <Grid
            className={Styles["top-bar-grid"]}
            container
            component="div"
            columns={12}
          >
            <Grid
              item
              size={{ xs: 12, md: 6 }} // xs:12, sm:12, md:12, lg:12, xl:12 or grow or auto
              // offset={{ xs: 3, md: 0 }} // offset for md and up
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body2" color="white">
                  Free Shipping for orders over $100
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body2" color="white">
                  Call Us: +1 234 567 890
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TopBar;
