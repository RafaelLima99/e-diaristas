import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { NoEncryption } from '@mui/icons-material';

 const useStyles = makeStyles((theme) => ({
   root: {
     background: 'blue',
     color: 'white',
    [theme.breakpoints.up('sm')] : {
      background: 'red',
      fontSize: '9.4rem',
      color: 'white'
      
      
    },
  },


  teste: {
    background: 'blue',
    color: 'white',
   [theme.breakpoints.up('xs')] : {
     
   },
  },

   testeb: {
   
   [theme.breakpoints.up('xs')] : {
    fontSize: '9.4rem' ,
     color: 'pink',
     background: 'pink',
     padding: '1px'
   },
 },


 }));
 

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (

   
          <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
   
  );

    

}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9), 
  createData('Gingerbread', 356, 16.0, 49, 3.9), 
  createData('Gingerbread', 356, 16.0, 49, 3.9),  
  createData('Gingerbread', 356, 16.0, 49, 3.9), 

];

export default function CollapsibleTable() {

const classes = useStyles();

  return (
    <div>
    <Container>
      
      <TableContainer sx={{ maxHeight: 440}} >
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table"  size="small" >
        <TableHead className={classes.root}>
          <TableRow>
            <TableCell />
            <TableCell>Moeda</TableCell>

            <TableCell align="right">Investimento</TableCell>
            <TableCell className={classes.teste} align="right">Lucro Liquido</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.testeb}>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TableContainer>
   
    </Container>
    </div>
  );
}