import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, Link } from '@mui/material';



const AdminDashboard = () => {
  const [payslips, setPayslips] = useState([]);

  useEffect(() => {
    const fetchPayslips = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('https://ndineemma.pythonanywhere.com/api/payslip/list/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setPayslips(response.data);
      } catch (error) {
        console.error('Error fetching payslips:', error);
      }
    };
    fetchPayslips();
  }, []);

  return (
    <Container component="main" maxWidth="lg" sx={{ mt: 8 }}>
      <Typography variant="h5" align="center" gutterBottom color="black">
        PaySlips List
      </Typography>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>JOB TITLE</TableCell>
              <TableCell>NET SALARY</TableCell>
              <TableCell>CURRENCY</TableCell>
              <TableCell>OTHER INFO</TableCell>
              <TableCell>EMPLOYMENT TYPE</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>FILE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payslips.map(payslip => (
              <TableRow key={payslip.id}>
                <TableCell>{payslip.job_title}</TableCell>
                <TableCell>{payslip.net_salary}</TableCell>
                <TableCell>{payslip.currency}</TableCell>
                <TableCell>{payslip.other_info}</TableCell>
                <TableCell>{payslip.employment_type}</TableCell>
                <TableCell>{payslip.location}</TableCell>
                <TableCell>
                  {payslip.file ? (
                    <Link href={payslip.file} target="_blank" rel="noopener noreferrer">
                      Download File
                    </Link>
                  ) : (
                    'No file uploaded'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
