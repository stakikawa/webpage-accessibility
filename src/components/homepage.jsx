import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Typography, Grid, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox } from '@material-ui/core';
import Site from './site.jsx';

import dummy from './dummy.jsx';

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
      renderForm: true,
      link: "",
      alt: false,
      font: false,
      color: false,
      data: [],
    }
  }

  handleSubmit = event => {
    alert('The link you submitted: ' + this.state.link + '. You also submitted the following: ' + this.state.alt + ' ' + this.state.font + ' ' + this.state.color + ' ');
    
    // Go to web scraper, get data

    // Give data to CV, get new data

    // Render data

    this.setState({ ...this.state, data: dummy});
    

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
        <br>
        </br><Typography variant="h3">Webpage Accessibility App</Typography>
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
      
      <Site inputData={this.state.data}></Site>

      </div>
  }
}

export default Homepage
