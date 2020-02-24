import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import firebase from '../../firebase/index';
import 'firebase/firestore'

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

export default function Footer(props) {
    const classes = useStyles();


    React.useEffect(() => {

        const db = firebase.firestore()
        db.collection('glamorouswrc').doc(`visits`).update({ [new Date().getTime().toString()]: new Date().toString() })
        var docRef = db.collection("glamorouswrc").doc("visits");

        docRef.get().then(function (doc) {
            if (doc.exists) {
                console.log("gespielt von:", Object.keys(doc.data()).length, ' Menschen');
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }, []);

    const _clickTab = (tabName) => {
        props.updateActiveTab(tabName)
    }

    let activeTab = props.activeTab

    let request = React.createRef()
    let feedback = React.createRef()
    return (
        <div style={{ paddingTop: '20px', marginBottom: '10px' }}>

            <div
                style={{
                    fontSize: '0.95em',
                    fontWeight: 'bold',
                    borderRadius: 0,
                    borderBottom: activeTab === 'beautiful' ? '2px solid white' : 0,
                    marginBottom: '8px',
                    cursor: 'pointer',
                    color: 'rgb(63, 82, 181)'
                }}
                color="inherit"
                onClick={() => _clickTab('about')}
            >
                About whatisin.tech
                    </div>
            <input
                style={{ padding: '5px', width: '302px', fontSize: '0.75em' }}
                placeholder='Wanna take part? Submit link of your photo from FB!'
                ref={input => { request = input }}
            />
            <button
                style={{ padding: '5px',fontSize: '0.75em'  }}
                onClick={() => {
                    const db = firebase.firestore();
                    db.collection('glamorouswrc').doc(`requests`).set({ [new Date().getTime().toString()]: request.value })
                    request.value = ''
                }} >Submit</button>
            <br />


            <input
                style={{ marginTop: '8px', padding: '2px', width: '200px', fontSize: '0.75em' }}
                placeholder='Type feedback or message!'
                ref={input => { feedback = input }}
            />
            <button
                style={{ padding: '2px', fontSize: '0.75em' }}
                onClick={() => {
                    const db = firebase.firestore();
                    db.collection('glamorouswrc').doc(`zfeedbacks`).set({ [new Date().getTime().toString()]: feedback.value })
                    feedback.value = ''
                }} >Send</button>

        </div>
    );
}