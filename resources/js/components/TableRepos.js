import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    opacity: 0.7,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, description, url) {
  id += 1;
  return { id, name, description, url };
}

function TableRepos(props) {
  const { classes } = props;

  const rows = () => {
    return props.reposArray.map((element)=>{
      return createData(element.name,element.description,element.url)
    })
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Title</CustomTableCell>
            <CustomTableCell>Description</CustomTableCell>
            <CustomTableCell>Url</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows().map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell>{row.description}</CustomTableCell>
                <CustomTableCell><a href={row.url} target="_blank">{row.url}</a></CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableRepos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableRepos);
