import { react } from "react";
import languagesList from './languages';
import BookCard from "./BookCard";
import {Container, Grid} from "@material-ui/core";
import useStyles from "./Style"

const Languages = () => {
  const classes=useStyles();

  return (
    <div>
      <Container   maxWidth="md" style={{marginTop:"200px"}}>

     <Grid  padding={2} spacing={5} container  >
        {languagesList.map((languages) => (
          <Grid xs={6}
          sm={4}
          md={3}
          lg={4}
           height={'500px'}
             width={"100%"}
              item 
               Key={languages.id}>
            <BookCard
             id={languages.id}
            image={languages.image}
            BookAuthor={languages.BookAuthor}
            BookName={languages.BookName}
            Price={languages.Price}
            />
          </Grid>
        ))}
        
     </Grid>
     </Container>
     </div>
    
  );
};

export default Languages;
