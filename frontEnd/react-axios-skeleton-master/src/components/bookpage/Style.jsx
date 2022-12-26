import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
    card:{width:"100%" ,height:"100%",borderRadius:3,boxShadow:"5px 5px 10px #ccc"},
    cardMedia:{width:"100%" ,height:"100%"},
    cardContent:{width:"100%" ,height:"20%"},
  });
  export default useStyles;