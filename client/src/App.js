import Notifications from './components/Notifications';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import {Typography,AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginLeft: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
  },
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 100px",
    border: "2px solid black",
    width: "600px",
    flexDirection: "row",
    borderRadius: "15px",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
  },
}));
function App() {
  const classes=useStyles()
  return (
    <div className={classes.wrapper}>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Typography variant="h4" align="center">Video Chat</Typography>
      </AppBar>
      <VideoPlayer/>
      <Options>
        <Notifications/>
      </Options>
    </div>
  );
}

export default App;
