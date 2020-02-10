import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Main from '../Main/Main'
import Beautiful from '../Beautiful/Beautiful'
import Noticed from '../Noticed/Noticed'
import Crush from '../Crush/Crush'
import Navbar from '../Navbar/Navbar'
import Rank from '../Rank/Rank'
import './Homepage.css'


const rawDamen = require('../../assets/data/dumbasData.json')

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
    'Do you have crush on her?',
]

export default function ButtonAppBar() {
    const [activeTab, setActiveTab] = React.useState('beautiful')
    const [toGetRank, setToGetRank] = React.useState(0)
    const [showRank, setShowRank] = React.useState(false)
    const classes = useStyles();

    const updateActiveTab = (tabName) => {
        setActiveTab(tabName)
    }

    React.useEffect(() => {
        //api call to get the all girls details
    }, [])

    const bpayload = {
        command: 'Who is more beautiful?'
    }
    const npayload = {
        command: 'Have you noticed her before?'
    }
    const cpayload = {
        command: 'Do you have crush on her?'
    }

    return (
        <div className={classes.root}>
            <Navbar updateActiveTab = {updateActiveTab} activeTab= {activeTab}/>
            {/* <Main/> */}
            {/* <EutaPhoto/> */}
            {activeTab === 'beautiful'? <Beautiful payload = {{rawDamen}} />:null}
            {activeTab === 'noticed'? <Noticed payload = {{rawDamen}} />:null}
            {activeTab === 'crush'? <Crush payload = {{rawDamen}} />:null}
            {/* <Rank/> */}
        </div>
    );
}

 