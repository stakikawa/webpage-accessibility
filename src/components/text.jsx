import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    },
});

const Text = ({ text }) => {


    return (
        <div>
            <Typography align="left" 
                        variant="body1" 
                        gutterBottom>
                {text}
            </Typography>
        </div>
    );
};

export default Text;