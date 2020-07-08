import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Gauge from 'react-radial-gauge';
import Nav from "./Nav.js";
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/styles';
import { HashRouter as Router, Route, Link as RouterLink } from "react-router-dom";
import { useTheme } from '@material-ui/styles';
import { Inputs } from './Inputs.js';
import { Outputs } from './Outputs.js';
import { Controllers } from './Controllers.js';
import { useStyles } from '../styles/Styles.js';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const sections = {
  inputs: ['/', "Inputs", Inputs],
  ouputs: ['/Outputs', "Outputs", Outputs],
  controllers: ['/Controllers', "Controllers", Controllers],
};

export default function WaterApp (props) {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <React.Fragment>
      <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Watering control
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
            <Nav loggedIn={loggedIn}
                 handleLogout={() => setLoggedIn(false)}
                 handleLogIn={() => setLoggedIn(true)} />
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {Object.keys(sections).map((key) => {
            const exact = sections[key][0] === "/";
            const section_path = sections[key][0];
            return (
              <React.Fragment>
                <Route
                  path={section_path}
                  exact={exact}
                  children={({ match }) => (
                    <div className={match ? "active" : ""}>
                      <Link
                        to={section_path}
                        href={section_path}
                        component={RouterLink}
                        color="inherit"
                        noWrap
                        key={section_path}
                        variant="body2"
                        className={classes.toolbarLink}
                        underline={match ? 'always' : 'hover'}
                      >
                        {sections[key][1]}
                      </Link>
                    </div>
                  )}
                />
              </React.Fragment>
            )
          })}
        </Toolbar>
        <main>
          {/* Sub featured posts */}
          {
            Object.keys(sections).map(function (key) {
            const exact = sections[key][0] === "/";
            return exact ? (
              <Route exact path={sections[key][0]} component={sections[key][2]} />
            ) : (
              <Route path={sections[key][0]} component={sections[key][2]} />
            )
            })
          }
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </Router>
    </React.Fragment>
  );
}
