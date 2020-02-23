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

export default function Navbar(props) {
    const [toGetRank, setToGetRank] = React.useState(0)
    const [showRank, setShowRank] = React.useState(false)
    const classes = useStyles();


    const _clickTab = (tabName) => {
        props.updateActiveTab(tabName)
    }

    let activeTab = props.activeTab

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h6" style={{ fontSize: '0.75em', fontWeight: 'bold' }} className={classes.title}>
                        Glamorous WRC
                    </Typography>
                    <Button
                        style={{ fontSize: '0.75em', fontWeight: 'bold' ,borderRadius: 0, borderBottom: activeTab ==='beautiful'?'2px solid white': 0 }}
                        color="inherit"
                        onClick={()=> _clickTab('beautiful')}
                    >
                        {" "}Most Beautiful
                    </Button>
                    <Button
                        style={{ fontSize: '0.75em', fontWeight: 'bold',borderRadius: 0, borderBottom: activeTab ==='noticed'?'2px solid white': 0 }}
                        color="inherit"
                        onClick={()=> _clickTab('noticed')}
                    >
                        {" "}Most Noticed
                    </Button>
                    <Button
                        style={{ fontSize: '0.75em', fontWeight: 'bold',borderRadius: 0, borderBottom: activeTab ==='crush'?'2px solid white': 0 }}
                        color="inherit"
                        onClick={()=> _clickTab('crush')}
                    >
                        {" "}Crush of the Most
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}