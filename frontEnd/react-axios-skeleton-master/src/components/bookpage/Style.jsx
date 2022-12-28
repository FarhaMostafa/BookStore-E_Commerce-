import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    card:{height:"75%",width:"70%",flexDirection:"column",padding:"25px 25px",borderRadius:3,boxShadow:"5px 5px 10px #ccc"},
    cardMedia:{width:"100%" ,height:"100%"},
    cardContent:{width:"100%",height:"20%"},
    cardGrid:{padding:"10px 0"}
  });
  export default useStyles;