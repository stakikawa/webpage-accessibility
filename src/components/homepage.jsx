import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, Grid, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}))

class Homepage extends React.Component {

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)

    this.state = {
      link: "",
      alt: false,
      font: false,
      color: false,
    }
  }

  handleSubmit = event => {
    alert('The link you submitted: ' + this.state.link + '. You also submitted the following: ' + this.state.alt + ' ' + this.state.font + ' ' + this.state.color + ' ');
    event.preventDefault();
  }

  handleClick = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked});
  };

  handleText = name => event => {
    this.setState({ ...this.state, [name]: event.target.value});
  };

  render () {

    const values = this.state

    return <div className='main'>
      <form onSubmit={this.handleSubmit}>
        <Typography variant="h3">Webpage Accessibility App</Typography>
        <TextField id="url" label="Paste URL" onChange={this.handleText('link')} value={values.link}></TextField>

        <Grid
          container
          justify="center"
          >
          <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={values.alt} onClick={this.handleClick('alt')} />}
            label="Add alt text"
          />
          <FormControlLabel
            control={<Checkbox checked={values.font} onChange={this.handleClick('font')} />}
            label="Fix font size"
          />
          <FormControlLabel
            control={<Checkbox checked={values.color} onChange={this.handleClick('color')} />}
            label="Fix coloring"
          />
        </FormGroup>
        </Grid>

        <Button type="submit" variant="contained" color="primary">Go!</Button> 
        </form>
      </div>
  }
}

export default Homepage
