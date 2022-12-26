import { makeStyles } from '@material-ui/styles';
import date from './page6_date';
import Link from "@material-ui/core/Link";
import * as ROUTES from '../../../../constants/routes';
import { AppBar, MenuItem, Toolbar, Container, Card, CardMedia, CardContent, CardActions, Button, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles({
    Card: { height: "80%", display: "flex", flexDirection: "column", padding: "25px 25px" }
    , CardMedia: { padding: "56.25%" }
    , CardContent: { flexGrow: 1 }
    , cardGrid: { padding: "10px 0" }
});
const page6 = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <b className='title'>BookSky</b>
                    <Toolbar />
                    <Link href={ROUTES.page3} variant="body2">
                        <Button >Psychology</Button>
                    </Link>
                    <Link href={ROUTES.page2} >
                        <Button >Literature</Button>
                    </Link>
                    <Link href={ROUTES.Historical} >
                        <Button >Historical Book</Button>
                    </Link>
                    <Link href={ROUTES.Scientific} >
                        <Button >Scientific Book</Button>
                    </Link>
                    <Link href={ROUTES.Languages} >
                        <Button >Languages</Button>
                    </Link>
                </Toolbar>
            </AppBar>
            < Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {date.map((page6_date) => (
                        <Grid item key={page6_date.id}>
                            <Card className={classes.Card}>
                                <CardMedia className={classes.CardMedia}
                                    image={page6_date.image} title="book"></CardMedia>
                                <CardContent className={classes.CardContent}>
                                    <b><p>{page6_date.title}</p></b>
                                    <Typography>{page6_date.Another}</Typography>
                                    <Typography>{page6_date.price}</Typography>
                                    <CardActions className={classes.CardActions}>
                                        <Button size='small' color='primary' variant="contained">Add To Card</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>    </>
    );
};

export default page6;