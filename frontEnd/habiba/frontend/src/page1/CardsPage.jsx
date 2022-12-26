import { react, uesState } from "react";

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
import data1 from "./data1";

const CardsPage = () => {
  //const [data,setData] = useState(scientific);

  return (
    <>
      <Grid container>
       
          <Grid item >
            <Card sx={{ maxwidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="./img1.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    lknkj
                                      </Typography>
                  <Typography variant="body2" color="text.secondary">
                    nkjnjhbh
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to card
                </Button>
              </CardActions>
            </Card>
          </Grid>
      </Grid>
    </>
  );
};

export default CardsPage;
