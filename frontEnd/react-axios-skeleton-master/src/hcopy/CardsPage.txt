import { react } from "react";

import useStyles from "./Style";
import scientific from './scientific';
import BookCard from "./BookCard";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";

const CardsPage = ({data}) => {

  return (
    <>
      <Grid container>
        {data.map((scientific) => (
          <Grid item Key={scientific._id}>
            <BookCard
             id={scientific._id}
            image={scientific.image}
            BookAuthor={scientific.BookAuthor}
            BookName={scientific.BookName}
            Price={scientific.Price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardsPage;
