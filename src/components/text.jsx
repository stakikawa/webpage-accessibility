import React from 'react';
import { Typography } from '@material-ui/core';

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