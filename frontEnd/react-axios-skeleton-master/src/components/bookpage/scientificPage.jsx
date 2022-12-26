import { react } from "react";
import scientificList from './scientific';
import BookCard from "./BookCard";
import {Grid,Container, Typography, Toolbar,MenuItem,AppBar, Link, Button} from "@material-ui/core";
import useStyles from './Style'
import { grey } from "@material-ui/core/colors";
import { Routes } from "react-router-dom";
import * as ROUTES from '../../constants/routes'

const Scientific = () => {
  const classes=useStyles();

  return (
    <div >    
      <AppBar position="static">
<Toolbar>
  <b className="title">BookSky</b>

<Link href={ROUTES.page3} variant="body2">
  <Button>Novels</Button>
</Link>
<Link href={ROUTES.page2} variant="body2">
  <Button>Literature</Button>
</Link>
<Link href={ROUTES.page6} variant="body2">
  <Button>Psychology</Button>
</Link>
<Link href={ROUTES.Historical} variant="body2">
  <Button>Historical</Button>
</Link>
<Link href={ROUTES.Languages} variant="body2">
  <Button>Languages</Button>
</Link>
<Link href={ROUTES.Scientific} variant="body2">
  <Button>Science</Button>
</Link>
</Toolbar>
      </AppBar>
<Container   maxWidth="md" >
 

    
     <Grid  padding={2} spacing={5} container  style={{marginTop:"130px"}}>
        {scientificList.map((scientific) => (
          <Grid xs={6}
           sm={4}
           md={3}
           lg={4}
           height={'300px'}
             width={"100%"}
              item 
               Key={scientific.id}>
            <BookCard
             id={scientific.id}
            image={scientific.image}
            BookAuthor={scientific.BookAuthor}
            BookName={scientific.BookName}
            Price={scientific.Price}
            />
          </Grid>
        ))}
        
     </Grid>
     </Container>
     </div>
    
  );
};

export default Scientific;
