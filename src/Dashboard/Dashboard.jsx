import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import demoImage from "./../assets/images/grocery.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },

  card: {
    position: "relative",
    paddingTop: 5,
  },

  MuiCardActions: {
    background: "#dbe1f1",
  },

  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "20ch",
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div>
        
        Hi
        
      </div>

          </Paper>
        </Grid> */}
          {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}

          <Grid item xs={3}>
            <Paper className={classes.card}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={`${demoImage}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.MuiCardActions}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              <Button variant="contained" color="primary">
                Hello World 2
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.card}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={`${demoImage}`}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.MuiCardActions}>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              <Button variant="contained" color="primary">
                Hello World
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard;
