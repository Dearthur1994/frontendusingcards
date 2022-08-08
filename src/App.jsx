
import './App.js';
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CssBaseline, Grid, Toolba, Container, Toolbar, CardContent } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './App.js';



const cards = [1, 2, 3, 4, 5]
function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Welcome to my World
            </Typography>
            <Typography variant='h5' align='center' color="textSecondary" paragraph>
              Welcome to my World and i am very pleased to have you respect my page and also respect me
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify='center' >
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my Photo's.
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    See my Secondary Photo's.
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key ={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card you can use to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'> View</Button>
                    <Button size='small' color='primary'> Edit</Button>

                  </CardActions>
                </Card>
              </Grid>))}

          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' gutterBottom align='center'>Footer is here</Typography>
        <Typography variant='subtitle1' align='center'color='textSecondary'> Something here to give the footer a purpose</Typography>

      </footer>
    </>
  );
}

export default App;
