import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Header from './header.jsx';
import AltPicture from './altpicture.jsx';
import Text from './text.jsx';

const useStyles = makeStyles({
    root: {
        fontSize: '36px',
    },
});

/*

TYPE CONSTRAINT: inputData is a list of objects such that each one if either a (1) header (2) paragraph (3) image

*/

const Site = ({ inputData }) => {

    // const classes = useStyles();

    return (
        <div className="newWebpage">
            { inputData.map(comp =>
                { switch(comp.type) {
                    case "head":
                        return <Header text={ comp.text } />
                    case "para":
                        return <Text text={ comp.text } />
                    case "img":
                        return <AltPicture source={ comp.source } newAlt={ comp.alt } />
                    default:
                        return <Typography>Bad input!</Typography>
                  } 
                })
            }
        </div>
    )
};

export default Site;