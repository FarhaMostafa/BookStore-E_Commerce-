import React from "react";
import { makeStyles } from "@mui/material";
import {Card ,Box,
 CardActionArea ,
 CardActions , 
 CardContent,
 CardMedia,
 Button ,
 Typography} from "@mui/material";


const MuiCard=()=>{
  
    return(
      <>
       <Box width="300px">
<Card>
  <CardContent>
    <Typography gutterBottom variant='h5' component='div'>
BookName
    </Typography>
    <Typography variant='h4' color='secondary'>BookAuthor</Typography>
  </CardContent>
</Card>


       </Box>
       </>
    )
}
export default MuiCard;