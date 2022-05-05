import {
  Button,
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Assignment, Phone, PhoneDisabled } from "@material-ui/icons";
import { SocketContext } from "../socketContext";
import { useContext, useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  gridContainer: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  container: {
    width: "600px",
    margin: "35px 0",
    padding: 0,
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  margin: {
    marginTop: 20,
  },
  padding: {
    padding: 20,
  },
  paper: {
    padding: "10px 20px",
    border: "2px solid black",
  },
}));
const Options = ({ children }) => {
  const classes = useStyles();
  const { callUser, callAccepted, callEnded, leaveCall, setName, me, name } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <Container className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <form noValidate className={classes.root} autoComplete='off'>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography variant='h6' gutterBottom>
                Account Info
              </Typography>
              <TextField
                label='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  startIcon={<Assignment fontSize='large' />}
                >
                  Copy your Id
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
              <Typography variant='h6' gutterBottom>
                Make a call
              </Typography>
              <TextField
                label='Id to call'
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<PhoneDisabled fontSize='large' fullWidth />}
                  onClick={leaveCall}
                  className={classes.margin}
                  fullWidth
                >
                  Hang up
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => callUser(idToCall)}
                  startIcon={<Phone fontSize='large'  />}
                  className={classes.margin}
                  fullWidth
                >
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  );
};

export default Options;
