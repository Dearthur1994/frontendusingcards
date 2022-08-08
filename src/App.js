import {makeStyles} from '@mui/material/styles';
import { display } from '@mui/system';


const useStyles = makeStyles((theme)=>({
container:{
 backgroundColor: theme.palette.backgroundColor.paper,
 padding:theme.spacing(8,0,6)
},
icon:{
    marginRight:'20px',
},
button:{
    marginTop:'40px',
},
cardGrid:{
    padding: '20px 0'
},
card:{
    height:'100%',
    display:'flex',
    flexDirection:'column',
},
cardMedia:{
    paddingTop:'56.25%'
},
cardContent:{
    flexGrow:'1',
},
footer:{
    backgroundColor: theme.palette.backgroundColor.paper,
    padding:'50px 0',
}
}));

export default useStyles