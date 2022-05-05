import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useContext } from "react";
import { ContextProvider } from "../socketContext";
import { SocketContext } from "../socketContext";
const useStyles = makeStyles((theme) => ({
  video: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  gridContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  paper: {
    padding: "10px",
    border: "2px solid red",
    margin: "10px",
  },
}));
const VideoPlayer = () => {
  const {userVideo,myVideo,name,callAccepted,callEnded,stream,call} = useContext(SocketContext);
  
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      {/* own video */}
      {stream && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {name || "Caller"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className={classes.video}
            ></video>
          </Grid>
        </Paper>
      )}
      {/* user's video */}
      {callAccepted && !callEnded && (
        <Paper className={classes.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {call.name || "Callee"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className={classes.video}
            ></video>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
