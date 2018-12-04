import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function InputAndButton(props) {
  return (
    <Grid
        container
        direction="row"
        justify="center"
        spacing={16}
        style={{marginTop:'3%', marginBottom:'3%'}}>
        <FormControl style={{width:'30%'}}>
            <InputLabel htmlFor="custom-css-standard-input">
                {props.placeHolder}
            </InputLabel>
            <Input onChange={props.handleChange} onKeyPress={props.handleKeyPress} id="custom-css-standard-input"/>
        </FormControl>
        <Button variant="contained" color="primary" onClick={props.onButtonPressed}>
            {props.buttonLabel}
        </Button>
    </Grid>
  );
}

InputAndButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InputAndButton);
