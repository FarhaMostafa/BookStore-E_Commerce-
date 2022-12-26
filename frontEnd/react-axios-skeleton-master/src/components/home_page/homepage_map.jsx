import React from 'react'
import UseStyles from '../../Style'
import homepage_array from './homepage_array'
import {
    Typography,
    AppBar,
    CardActions,
    CardContent,
    Button,
    Container,
    Toolbar,
    Card,
} from '@material-ui/core'
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import * as ROUTES from "../../constants/routes"
import { padding } from '@mui/system';

const homepage_map = ({ id, cardName, image, links }) => {
    const classes = UseStyles();

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <LocalLibraryIcon></LocalLibraryIcon>
                    </IconButton> */}
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        book store
                    </Typography>
                    <Grid >
                        <Toolbar >
                            <Link href={ROUTES.Contact_us} variant="body2">
                                <Button variant="text" color="success" >contactus</Button>
                            </Link>
                            <Link href={ROUTES.About_us} variant="body2">
                                <Button variant="text" color="success" >Aboutus</Button>
                            </Link>
                            <Link href={ROUTES.SIGN_IN} variant="body2">
                                <Button variant="text" color="success">Signin</Button>
                            </Link>
                            <Link href={ROUTES.SIGN_UP} variant="body2">
                                <Button variant="text" color="success">register</Button>
                            </Link>
                            {/* <IconButton color='inherit' aria-label="add to shopping cart">
                                <AddShoppingCartIcon />
                            </IconButton> */}
                        </Toolbar>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={classes.paperContainer}>
                <Container maxWidth="9g" style={{ marginTop: "90px" }}>
                    <Typography variant='h2'
                        align="center"
                        color='textPrimary'
                        gutterBottom>
                        bookSky Store
                    </Typography>
                    <Typography variant='h4'
                        align="center"
                        color="textSecondary"
                        gutterBottom>
                        welcome in our book store we hope you find what you want
                    </Typography>
                </Container>
            </div>
            <Container maxWidth="md" style={{ marginTop: "200px" }}></Container>
            <Grid padding={3} spacing={6} container>
                {homepage_array.map((homecard) => (
                    <Grid xs={6} sm={4} md={3} lg={4} height={'50px'} width={"100px"} item>
                        <Link href={homecard.links} variant="body2">
                            <Card className={classes.card} style={{ width: "30", height: "40" }}>
                                <div style={{ width: "100%", height: "70%" }}>
                                    <img className={classes.cardMedia} src={homecard.image} alt={homecard}></img>
                                </div>
                                <CardContent className={classes.cardContent} style={{ width: "100", height: "15", padding: '3px' }}>
                                    <Typography gutterBottom variant='h6'>
                                        {homecard.cardName}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{ padding: '3px' }}>
                                    <Button size="small" color="primary">
                                        views
                                    </Button>
                                </CardActions>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default homepage_map