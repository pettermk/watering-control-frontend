import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ReactSpeedometer from "react-d3-speedometer";
import { fetchControllers } from '../api/Api.js';
import { useStyles } from '../styles/Styles.js';
import { ControllersAction } from '../actions/ControllersAction';

export function Controllers (props) {
  const classes = useStyles();
  const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch(ControllersAction());
        }, [])
    const controllers = useSelector(state => state.controllers.controllers);
  return (
    <Grid container spacing={4} className={classes.cardGrid}>
      {controllers.length > 0 ? controllers.map((controller, index) => (
        <Grid item key={controller.id} xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h5">
                    {controller.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {controller.description}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {controller.set_point}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </CardActionArea>
        </Grid>
      )) : null}
    </Grid>
  )
}
