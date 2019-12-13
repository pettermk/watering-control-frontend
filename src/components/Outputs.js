import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ReactSpeedometer from "react-d3-speedometer";
import { fetchOutputs } from '../api/Api.js';
import { useStyles } from '../styles/Styles.js';

export function Outputs (props) {
  const classes = useStyles();
  const [outputs, setOutputs] = useState([]);
  useEffect(
    () => {
      async function fetchOutputData() {
        const result = await fetchOutputs();
        setOutputs(result.data);
      }
      fetchOutputData();
    },
    [],
  )
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {outputs.length > 0 ? outputs.map((output, index) => (
        <Grid item key={output.id} xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {output.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {output.description}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {output.location}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <ReactSpeedometer size={150} value={output.reading} />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      )) : null}
    </Grid>
  )
}
