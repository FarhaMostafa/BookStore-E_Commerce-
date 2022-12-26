import React from "react";
import useStyles from "./Style";
import { CardActionArea, CardMedia, CardContent, Card, Typography, CardActions, Button } from "@material-ui/core";
const BookCard = ({ BookAuthor, BookName, Price, image }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <div style={{ width: "100%", height: "70%" }}>
          <img className={classes.cardMedia} src={image} alt={BookName}></img>
        </div>
        <CardContent className={classes.cardContent} style={{ width: "100%", height: "15%", padding: '6px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {BookName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {BookAuthor}
          </Typography>
          <Typography>{Price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" >
            Add to card
          </Button>
        </CardActions>
      </Card>
    </>

  )
}



export default BookCard;