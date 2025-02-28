import React, { useState } from 'react';
import { Container, Box, Typography, Button, Paper, Grid } from '@mui/material';

const UserProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleViewProfile = () => {
    alert("Viewing Profile");
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleLogout = () => {
    alert("Logging out");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            User Profile
          </Typography>

          {/* Displaying profile info */}
          {!isEditing ? (
            <Box>
              <Typography variant="h6">Name: John Doe</Typography>
              <Typography variant="body1">Email: johndoe@example.com</Typography>
              <Typography variant="body1">Joined: January 2023</Typography>

              <Grid container spacing={2} mt={3}>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={handleViewProfile}
                  >
                    View Profile
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleEditProfile}
                  >
                    Edit Profile
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ) : (
            // Editable profile section
            <Box>
              <Typography variant="h6">Edit Profile</Typography>
              <Box mt={2}>
                <Typography variant="body1">Name</Typography>
                <input type="text" defaultValue="John Doe" style={{ width: '100%', padding: '8px' }} />
              </Box>
              <Box mt={2}>
                <Typography variant="body1">Email</Typography>
                <input type="email" defaultValue="johndoe@example.com" style={{ width: '100%', padding: '8px' }} />
              </Box>

              <Grid container spacing={2} mt={3}>
                <Grid item xs={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default UserProfilePage;
