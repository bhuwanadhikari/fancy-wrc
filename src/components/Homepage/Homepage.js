import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Main from '../Main/Main'
import DuitaPhoto from '../DuitaPhoto/DuitaPhoto'
import EutaPhoto from '../EutaPhoto/EutaPhoto'
import Navbar from '../Navbar/Navbar'
import Rank from '../Rank/Rank'
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
    const [activeTab, setActiveTab] = React.useState('beautiful')
    const [toGetRank, setToGetRank] = React.useState(0)
    const [showRank, setShowRank] = React.useState(false)
    const classes = useStyles();

    const updateActiveTab = (tabName) => {
        setActiveTab(tabName)
    }



    return (
        <div className={classes.root}>
            <Navbar updateActiveTab = {updateActiveTab} activeTab= {activeTab}/>
            {/* <Main/> */}
            {/* <EutaPhoto/> */}
            {activeTab === 'beautiful'? <DuitaPhoto/>:null}
            {activeTab === 'popular'? <DuitaPhoto/>:null}
            {activeTab === 'noticed'? <EutaPhoto/>:null}
            {activeTab === 'crush'? <EutaPhoto/>:null}
            {/* <Rank/> */}
        </div>
    );
}


 