import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import img from './components/images/memories.jpeg'
import Form from './components/Form/Form.js' ;
import Posts from './components/Posts//Posts.js' ;
import useStyles from './styles.js'
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color="inherit">
        <Typography  className={classes.heading} variant='h2' align='center'>  memories </Typography>
        <img   className={classes.image} src={img} alt="memories" height="600" />

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>


      </Grow>
    </Container>
  );
}

export default App;
