import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

// Dummy data logs
const dataLogs = [
  { date: '2025-02-01', temperature: 22, humidity: 60, waterLevel: 80 },
  { date: '2025-02-02', temperature: 23, humidity: 58, waterLevel: 82 },
  { date: '2025-02-03', temperature: 21, humidity: 62, waterLevel: 79 },
  { date: '2025-02-04', temperature: 24, humidity: 59, waterLevel: 81 },
];

const DataLogsPage = () => {
  // Function to export table data as a PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ['Date', 'Temperature (°C)', 'Humidity (%)', 'Water Level (%)'];
    const tableRows = [];

    // Prepare table rows from the data logs
    dataLogs.forEach((log) => {
      const logData = [log.date, log.temperature, log.humidity, log.waterLevel];
      tableRows.push(logData);
    });

    // Add a title to the PDF
    doc.text('Data Logs Report', 14, 15);

    // Generate the table using jsPDF-AutoTable
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    // Save the PDF
    doc.save('data_logs_report.pdf');
  };

  return (
    <Container maxWidth="lg">
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Data Logs
        </Typography>
        <Box mb={2}>
          <Typography variant="h6">
            Temperature History, Humidity History, and Water Level Records
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={exportPDF}
          sx={{ mb: 2 }}
        >
          Export Data as PDF
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Temperature (°C)</TableCell>
                <TableCell>Humidity (%)</TableCell>
                <TableCell>Water Level (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataLogs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.temperature}</TableCell>
                  <TableCell>{log.humidity}</TableCell>
                  <TableCell>{log.waterLevel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default DataLogsPage;
