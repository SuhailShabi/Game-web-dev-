import React, { useState } from 'react';
import { 
  Container, Grid, Paper, Typography, Box, IconButton, Switch, FormControlLabel 
} from '@mui/material';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { Thermostat, WaterDrop, Cloud, Brightness7 } from '@mui/icons-material';

// Dummy data for charts
const data = [
  { name: 'Jan', temperature: 22, humidity: 60, lightIntensity: 200, waterLevel: 80 },
  { name: 'Feb', temperature: 24, humidity: 55, lightIntensity: 220, waterLevel: 75 },
  { name: 'Mar', temperature: 20, humidity: 65, lightIntensity: 240, waterLevel: 70 },
  { name: 'Apr', temperature: 25, humidity: 50, lightIntensity: 250, waterLevel: 65 },
  { name: 'May', temperature: 27, humidity: 45, lightIntensity: 280, waterLevel: 60 },
];

// Alert data
const alerts = [
  { id: 1, message: 'Humidity too low, increase water level!', type: 'warning' },
  { id: 2, message: 'Temperature is rising above optimal range!', type: 'warning' },
];

const GreenhouseDashboard = () => {
  // Settings toggles state
  const [autoWatering, setAutoWatering] = useState(false);
  const [autoLight, setAutoLight] = useState(false);
  const [temperatureAlerts, setTemperatureAlerts] = useState(true);
  const [humidityAlerts, setHumidityAlerts] = useState(true);
  const [waterAlerts, setWaterAlerts] = useState(true);
  const [lightAlerts, setLightAlerts] = useState(true);


  const handleToggleAutoWatering = () => setAutoWatering(!autoWatering);
  const handleToggleAutoLight = () => setAutoLight(!autoLight);
  const handleToggleTemperatureAlerts = () => setTemperatureAlerts(!temperatureAlerts);
  const handleToggleHumidityAlerts = () => setHumidityAlerts(!humidityAlerts);
  const handleToggleWaterAlerts = () => setWaterAlerts(!waterAlerts);
  const handleToggleLightAlerts = () => setLightAlerts(!lightAlerts);


  // Colors for pie chart slices
  const COLORS = ['#ffeb3b', '#2196f3', '#ff9800'];

  return (
    <Container maxWidth="lg">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Greenhouse Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Overview Cards */}
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3} 
              sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h6">Current Temperature</Typography>
                <Typography variant="h4">25°C</Typography>
              </Box>
              <IconButton sx={{ color: '#ff9800' }}>
                <Thermostat />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3} 
              sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h6">Current Humidity</Typography>
                <Typography variant="h4">50%</Typography>
              </Box>
              <IconButton sx={{ color: '#4caf50' }}>
                <Cloud />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3} 
              sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h6">Light Intensity</Typography>
                <Typography variant="h4">200 lx</Typography>
              </Box>
              <IconButton sx={{ color: '#ffeb3b' }}>
                <Brightness7 />
              </IconButton>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3} 
              sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <Box>
                <Typography variant="h6">Water Level</Typography>
                <Typography variant="h4">80%</Typography>
              </Box>
              <IconButton sx={{ color: '#2196f3' }}>
                <WaterDrop />
              </IconButton>
            </Paper>
          </Grid>

          {/* Alerts Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Alerts
              </Typography>
              {alerts.map((alert) => (
                <Box 
                  key={alert.id} 
                  sx={{ marginBottom: 2, padding: 1, border: '1px solid', borderColor: 'gray', borderRadius: 1 }}
                >
                  <Typography 
                    variant="body1" 
                    color={alert.type === 'warning' ? 'error' : 'primary'}
                  >
                    {alert.message}
                  </Typography>
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Charts Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Temperature </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="temperature" 
                    stroke="#ff9800" 
                    fill="#ffcc80" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Humidity </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="humidity" 
                    stroke="#82ca9d" 
                    fill="#c8e6c9" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Overview and Settings Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Overview</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={[
                      { name: 'Light Intensity', value: 200 },
                      { name: 'Water Level', value: 80 },
                      { name: 'Temperature', value: 25 },
                    ]}
                    outerRadius={120}
                    fill="#8884d8"
                    label
                  >
                    {[
                      { name: 'Light', color: COLORS[0] },
                      { name: 'Water', color: COLORS[1] },
                      { name: 'Temp', color: COLORS[2] },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Settings Card */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              <FormControlLabel
                control={
                  <Switch 
                    checked={autoWatering} 
                    onChange={handleToggleAutoWatering} 
                  />
                }
                label="Auto Watering"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={autoLight} 
                    onChange={handleToggleAutoLight} 
                  />
                }
                label="Auto Light Adjustment"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={temperatureAlerts} 
                    onChange={handleToggleTemperatureAlerts} 
                  />
                }
                label="Temperature Alerts"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={humidityAlerts} 
                    onChange={handleToggleHumidityAlerts} 
                  />
                }
                label="Humidity Alerts"
              />
               <FormControlLabel
                control={
                  <Switch 
                    checked={waterAlerts} 
                    onChange={handleToggleWaterAlerts} 
                  />
                }
                label="Water Alerts"
              />
              <FormControlLabel
                control={
                  <Switch 
                    checked={lightAlerts} 
                    onChange={handleToggleLightAlerts} 
                  />
                }
                label="Light Alerts"
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default GreenhouseDashboard;
