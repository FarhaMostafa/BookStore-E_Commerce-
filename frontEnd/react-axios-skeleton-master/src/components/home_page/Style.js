import { Image } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'
import books2 from "./books2.jpg"
const UseStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    card: {
        height: "80%", display: "flex", flexDirection: "column", padding: "25px 25px"
    },
    cardGrid: { padding: "10px 0" },
    cardMedia: { width: "100%", height: "100%" },
    cardContent: { width: "100%", height: "15%" },
    paperContainer: {
        backgroundImage: `url(${books2})`,
        padding: "20px",
        margin: "5px",
    },
}));

export default UseStyles;