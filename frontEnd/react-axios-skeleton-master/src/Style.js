import { Image } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import books2 from "./components/home_page/books2.jpg"
const UseStyles = makeStyles((theme) => ({
    cardGrid: { padding: "30px 0" },
    Card: {
        height: "100%", display: "flex", flexDirection: "column",
        padding: "30px 15px"
    },
    CardMedia: { paddingTop: "55%" },
    CardContent: { flexGrow: 1 },
    paperContainer: {
        backgroundImage: `url(${books2})`,
        padding: "20px",
        margin: "5px",
    },
    // root: {
    //     '& > *': {
    //         margin: theme.spacing(1),
    //     },
    // },
}));

export default UseStyles;