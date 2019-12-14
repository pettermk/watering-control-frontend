import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ReactSpeedometer from "react-d3-speedometer";
import { fetchInputs } from '../api/Api.js';
import { useStyles } from '../styles/Styles.js';
import { InputsAction } from '../actions/InputsAction';

export function Inputs (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(InputsAction())
        }, [])
  const inputs = useSelector(state => state.inputs.inputs)
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {inputs.length > 0 ? inputs.map((input) => (
        <Grid item key={input.id} xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {input.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {input.description}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {input.location}
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <ReactSpeedometer size={150} value={70} />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
      )) : null}
    </Grid>
  )
}
