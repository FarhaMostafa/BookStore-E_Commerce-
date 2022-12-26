import React from 'react'
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    Button,
    Container,
    Toolbar,
    CardMedia,
} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import IconButton from '@mui/material/IconButton'
import UseStyles from '../../Style'
import { color } from '@mui/system';
import books3 from "./books3.jpg"
import book_hes from "./book_hes.jpg"
import book_lit from "./book_lit.jpeg"
import book1_lan from "./book1_lan.jpeg"
import book_pys from "./book_pys.jpeg"
import book2_che from "./book2_che.jpeg"
import book2_nov from "./book2_nov.jpeg"
import Stack from '@mui/material/Stack';
import Link from "@material-ui/core/Link";
import * as ROUTES from "../../constants/routes"
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const homepage = () => {
    const classes = UseStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {/* <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete">
                        </IconButton>
                    </Stack> */}
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <LocalLibraryIcon></LocalLibraryIcon>
                    </IconButton>
                    <Toolbar>
                        <Grid>
                            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                                book store
                            </Typography>
                        </Grid >
                        <Grid >
                            <Toolbar >
                                <Link href={ROUTES.SIGN_UP} variant="body2">
                                    <Button variant="text" color="success">contactus</Button>
                                </Link>
                                <Link href={ROUTES.SIGN_UP} variant="body2">
                                    <Button variant="text" color="success">Aboutus</Button>
                                </Link>
                                <Link href={ROUTES.SIGN_UP} variant="body2">
                                    <Button variant="text" color="success">Signin</Button>
                                </Link>
                                <Link href={ROUTES.SIGN_UP} variant="body2">
                                    <Button variant="text" color="success">register</Button>
                                </Link>
                                <IconButton color="primary" aria-label="add to shopping cart">
                                    {/* <AddShoppingCartIcon /> */}
                                </IconButton>
                            </Toolbar>
                        </Grid>
                    </Toolbar>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.paperContainer}>
                    <Container maxWidth="9g" style={{ marginTop: "90px" }}>
                        <Typography variant='h2'
                            align="center"
                            color='textPrimary'
                            gutterBottom>
                            BookSky Store
                        </Typography>
                        <Typography variant='h4'
                            align="center"
                            color="textSecondary"
                            gutterBottom>
                            welcome in our book store we hope you find what you want
                        </Typography>
                    </Container>
                </div>
                <Toolbar>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid backgroundImage="./book_hes.jpg">
                            <Grid item xs={11} >
                                <Card className={classes.Card}>
                                    <CardMedia className={classes.CardMedia}
                                        image={book_lit} title="image"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant='h6'>
                                            Literature Book
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                views
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid >
                            <Grid item xs={11}>
                                <Card className={classes.Card}>
                                    <CardMedia className={classes.CardMedia}
                                        image={book_hes} title="image"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant='h6'>
                                            Historical Book
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color='primary'>
                                                views
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid item xs={11}>
                            <Card className={classes.Card}>
                                <CardMedia className={classes.CardMedia}
                                    image={book2_che} title="image"></CardMedia>
                                <CardContent className={classes.CardContent}>
                                    <Typography gutterBottom variant='h6'>
                                        Scientific Book
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" color='primary'>
                                            views
                                        </Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Container>
                </Toolbar>
                <Toolbar>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid >
                            <Grid item xs={11}>
                                <Card className={classes.Card}>
                                    <CardMedia className={classes.CardMedia}
                                        image={book_pys} title="image"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant='h6'>
                                            Psychology
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color='primary'>
                                                views
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid >
                            <Grid item xs={11}>
                                <Card className={classes.Card}>
                                    <CardMedia className={classes.CardMedia}
                                        image={book2_nov} title="image"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant='h6'>
                                            Novels
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color='primary'>
                                                views
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid >
                            <Grid item xs={11}>
                                <Card className={classes.Card} >
                                    <CardMedia className={classes.CardMedia}
                                        image={book1_lan} title="image"></CardMedia>
                                    <CardContent className={classes.CardContent}>
                                        <Typography gutterBottom variant='h5'>
                                            Languages
                                        </Typography>
                                        <CardActions>
                                            <Button size="small" color='primary'>
                                                views
                                            </Button>
                                        </CardActions>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </main>
        </>
    )
}

export default homepage
