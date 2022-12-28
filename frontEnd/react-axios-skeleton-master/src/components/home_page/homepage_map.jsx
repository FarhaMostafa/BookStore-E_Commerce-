import React from 'react'
import UseStyles from './Style'
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
    Box,
    IconButton,
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
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                        BookSky store
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
                        align='center'
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
            < Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {homepage_array.map((homecard) => (
                        <Grid xs={6} sm={4} md={3} lg={4} height={'50px'} width={"100px"} item>
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
                                    <Link href={homecard.links} variant="body2">
                                        <Button size="small" color="primary">
                                            views
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <div style={{
                background: "#848482",
                padding: "20px",
                margin: "5px",
            }}>
                <Container maxWidth="9g" style={{ marginTop: "10px" }}>
                    <Typography variant='h6'
                        align="left"
                        color='textPrimary'
                        gutterBottom>
                        <table>
                            <thead>
                                <tr>
                                    <td>instractions</td>
                                    <td>Company</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>Terms of service</Link></td>
                                    <td><Link href={ROUTES.Contact_us} variant="body2" color='inherit'>contact us</Link></td>
                                </tr>
                                <tr>
                                    <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Copyright </Link></td>
                                    <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>About us</Link></td>
                                </tr>
                                <tr>
                                    <td><Link href={ROUTES.About_us} variant="body2" color='inherit'>Return policy</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </Typography>
                    <div style={{ padding: "20px", margin: "5px" }}>
                        <Container maxWidth="9g" >
                            <Typography variant='h7'
                                align="center"
                                color='textPrimary'
                                gutterBottom>
                                All rights reserved to BookSky 2021-2022 - by our teams
                            </Typography>
                        </Container>
                    </div>
                </Container>
            </div>
        </div >

    )
}

export default homepage_map