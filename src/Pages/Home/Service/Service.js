import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
const Service = (props) => {
    const { name, img, description } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80px', margin: '0 auto' }}

                    image={img}
                />
                <CardContent>

                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description}
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>
    );
};

export default Service;