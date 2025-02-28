import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            {/* Text Content */}
            <Grid item xs={12} md={6}>
              <Typography variant="h3" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to our company! We are dedicated to providing the best solutions for your greenhouse management needs.
                Our team of experts is passionate about technology and sustainable agriculture. We combine innovative approaches
                with practical insights to help you create the ideal environment for your plants.
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to empower greenhouse owners with real-time data, intuitive controls, and comprehensive analytics.
                We believe that the future of agriculture lies in the fusion of modern technology and eco-friendly practices.
              </Typography>
              <Typography variant="body1" paragraph>
                With years of experience in the field and a commitment to excellence, we work tirelessly to ensure that our products
                and services exceed expectations. Thank you for choosing us as your partner in cultivating a thriving, sustainable future.
              </Typography>
            </Grid>
            {/* Image */}
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1623136299195-570a06bdae6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Greenhouse overview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default AboutUsPage;
