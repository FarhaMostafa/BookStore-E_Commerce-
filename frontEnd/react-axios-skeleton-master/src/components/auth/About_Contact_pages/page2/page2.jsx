import { makeStyles } from '@material-ui/styles';
import Link from "@material-ui/core/Link";
import * as ROUTES from '../../../../constants/routes';
import date from './page2_date';
import { AppBar, MenuItem, Toolbar, Container, Card, CardMedia, CardContent, CardActions, Button, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
    Card: { height: "80%", display: "flex", flexDirection: "column", padding: "25px 25px" }
    , CardMedia: { padding: "56.25%" }
    , CardContent: { flexGrow: 1 }
    , cardGrid: { padding: "10px 0" }
});
const page2 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} style={{ flex: 1 }}>
                        BookSky store
                    </Typography>
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
                </Toolbar>
            </AppBar>
            < Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {date.map((page2_date) => (
                        <Grid item key={page2_date.id}>
                            <Card className={classes.Card}>
                                <CardMedia className={classes.CardMedia}
                                    image={page2_date.image} title="book"></CardMedia>
                                <CardContent className={classes.CardContent}>
                                    <b><p>{page2_date.title}</p></b>
                                    <Typography>{page2_date.Another}</Typography>
                                    <Typography>{page2_date.price}</Typography>
                                    <CardActions className={classes.CardActions}>
                                        <Button size='small' color='primary' variant="contained">Add To Card</Button>
                                    </CardActions>
                                </CardContent>
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
        </>
    );
};

export default page2;