import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import img from './components/images/memories.jpeg'
import Form from './components/Form/Form.js' ;
import Post from './components/Post/Post.js' ;
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color="inherit">
        <Typography variant='h2' align='center'>  memories </Typography>
        <img src={img} alt="memories" height="600" />

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent={'space-between'} alignItems={'stretch'} spacing={3}>
            <Grid item xs={12} sm={7}>
              <Post />
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
