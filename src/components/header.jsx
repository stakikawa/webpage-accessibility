import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        fontSize: '36px',
    },
});

const Header = ({ text }) => {

    const classes = useStyles();

    return (
        <div className="headerText">
            <Typography className = {classes.root} variant="h3">
                { text }
            </Typography>
        </div>
    );
};

export default Header;