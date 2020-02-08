import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Main from '../Main/Main'
import './Homepage.css'

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

export default function ButtonAppBar() {
    const [toShow, setToShow] = React.useState('beautiful')
    const [toGetRank, setToGetRank] = React.useState(0)
    const [showRank, setShowRank] = React.useState(false)
    const classes = useStyles();

    const _clickBeautiful = () => {
        setToShow('beautiful')
    }
    const _clickPopular = () => {
        setToShow('popular')
        
    }
    const _clickNoticed = () => {
        setToShow('noticed')
        
    }
    const _clickCrush = () => {
        setToShow('crush')
        
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" style={{ fontSize: '0.7em', fontWeight: 'bold' }} className={classes.title}>
                        Glamorous WRC
                    </Typography>
                    <Button
                        style={{ fontSize: '0.6em', fontWeight: 'bold' }}
                        color="inherit"
                        onClick = {_clickBeautiful}
                    >
                        {" "}Most Beautiful
                    </Button>
                    <Button
                        style={{ fontSize: '0.6em', fontWeight: 'bold' }}
                        color="inherit"
                        onClick = {_clickPopular}
                    >
                        {" "}Most Popular
                    </Button>
                    <Button
                        style={{ fontSize: '0.6em', fontWeight: 'bold' }}
                        color="inherit"
                        onClick = {_clickNoticed}
                    >
                        {" "}Most Noticed
                    </Button>
                    <Button
                        style={{ fontSize: '0.6em', fontWeight: 'bold' }}
                        color="inherit"
                        onClick = {_clickCrush}
                    >
                        {" "}With most CRUSHes
                    </Button>
                </Toolbar>
            </AppBar>
            <Main/>
            
        </div>
    );
}