import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const commands = [
    'Who is more beautiful?',
    'Have you noticed her?',
    'Do you have rush on her?',
]

const Main = (props) => {
    const classes = useStyles();

    return (

        <div className="main-body command">
            <Typography variant="h6"
                style={{
                    color: '#123456',
                    paddding: '50px'
                }}
            >
                Play to see the rank
            </Typography>
            <Typography variant="h6"
                style={{ fontSize: '0.9em', fontWeight: 'bold' }} className={classes.title}
            >
                Who is more beautiful?
            </Typography>
            <div
                className="image-box"
                onClick={() => {
                }}
            >
                <img
                    src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.0-9/49155721_2229284347318145_5851850467868409856_n.jpg?_nc_cat=103&_nc_oc=AQmohlR7T18NZnsISVutJ-G19s8feWKUiRvQMc6_Ku3DmnhdPOrSSTtE4kpnUGOck-k&_nc_ht=scontent.fpkr1-1.fna&oh=dc33fc04767857a7439223e652af79a7&oe=5ECF8D50"
                    alt="western region campus"
                    className="first-image girl-image"

                />
            </div>
            <div
                className="image-box"
                onClick={() => {
                }}
            >
                <img
                    src="https://scontent.fpkr1-1.fna.fbcdn.net/v/t1.0-9/49155721_2229284347318145_5851850467868409856_n.jpg?_nc_cat=103&_nc_oc=AQmohlR7T18NZnsISVutJ-G19s8feWKUiRvQMc6_Ku3DmnhdPOrSSTtE4kpnUGOck-k&_nc_ht=scontent.fpkr1-1.fna&oh=dc33fc04767857a7439223e652af79a7&oe=5ECF8D50"
                    alt="western region campus"
                    className="second-image girl-image"

                />
            </div>
        </div>
    )
}

export default Main;