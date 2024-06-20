import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Autocomplete, Box, Button, TextField, Typography, Container, Paper, CssBaseline, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';






const UploadBox = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    //marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    background: 'linear-gradient(135deg, #0d47a1 30%, #29b6f6 90%)',
    color: theme.palette.primary.contrastText,
  }));


const employmentTypes = [
  'Full-Time',
  'Part-Time',
  'Contract',
  'Temporary',
  'Internship',
  'Freelance',
  'Other'
];


const provinces = [
  "Central",
  "Copperbelt",
  "Eastern",
  "Luapula",
  "Lusaka",
  "Muchinga",
  "Northern",
  "North Western",
  "Southern",
  "Western",
]


function FileUpload() {
    const [file, setFile] = useState(null);
    const [jobTitle, setJobTitle] = useState('');
    const [netSalary, setNetSalary] = useState('');
    const [otherInfo, setOtherInfo] = useState('');
    const [location, setLocation] = useState('');
    const [employmentType, setEmploymentType] = useState('');
    const [currency, setCurrency] = useState('ZMW');
    



    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleEmploymentTypeChange = (event, newValue) => {
      setEmploymentType(newValue);
    };
  
    const handleLocationChange = (event, newValue) => {
      setLocation(newValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job_title', jobTitle);
        formData.append('net_salary', netSalary);
        formData.append('other_info', otherInfo);
        formData.append('employment_type', employmentType);
        formData.append('location', location);
        formData.append('currency', currency);


        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await axios.post('https://ndineemma.pythonanywhere.com/api/payslip/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Upload successful!: ', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Upload failed!');
        }
    };

    return (
      <Container component="main" maxWidth="sm" sx={{ mt: 8 }}>
      <CssBaseline />
      <UploadBox elevation={3}>
        <Typography component="h1" variant="h5" align="center">
          Payslip Info
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                freeSolo
                options={employmentTypes}
                value={employmentType}
                onChange={handleEmploymentTypeChange}
                renderInput={(params) => (
                  <TextField {...params} label="Employment Type" variant="outlined" fullWidth />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                freeSolo
                options={provinces}
                value={location}
                onChange={handleLocationChange}
                renderInput={(params) => (
                  <TextField {...params} label="Location" variant="outlined" fullWidth />
                )}
              />
            </Grid>

            {/* <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Net Salary"
                type="number"
                value={netSalary}
                onChange={(e) => setNetSalary(e.target.value)}
              />
            </Grid> */}

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <TextField
                    name="netSalary"
                    required
                    fullWidth
                    id="netSalary"
                    label="Net Salary"
                    value={netSalary}
                    onChange={(e) => setNetSalary(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel id="currency-label">Currency</InputLabel>
                    <Select
                      labelId="currency-label"
                      id="currency"
                      value={currency}
                      label="Currency"
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <MenuItem value="USD">USD</MenuItem>
                      <MenuItem value="ZMW">ZMW</MenuItem>
                      <MenuItem value="EUR">EUR</MenuItem>
                      <MenuItem value="GBP">GBP</MenuItem>
                      {/* Add other currencies as needed */}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>


            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Other Info"
                multiline
                rows={4}
                value={otherInfo}
                onChange={(e) => setOtherInfo(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" component="label" fullWidth>
                Upload PAYSLIP
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="secondary">
                SHARE
              </Button>
            </Grid>

          </Grid>
        </Box>
      </UploadBox>
    </Container>
  );
};

export default FileUpload;
