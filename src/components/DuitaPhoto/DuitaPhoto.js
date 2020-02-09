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
        'Do you know her?',
        'Do you have rush on her?',
    ]

    const DuitaPhoto = (props) => {
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
                        console.log('heelo')
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
                        console.log('heelo')
                    }}
                >
                    <img
                        src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.110.960.960a/p960x960/51852472_529904827413283_5411349340566323200_o.jpg?_nc_cat=106&_nc_oc=AQmXtvKqH6r4YSmF8-0duBzpSXK4AlB9N51sM-5pB-NlpV4TSxmSGU-S99B8OnQlhV8&_nc_ht=scontent.fktm3-1.fna&_nc_tp=1003&oh=964edffec5d38995c113cc8c936a554c&oe=5ED92DA2"
                        alt="western region campus"
                        className="second-image girl-image"

                    />
                </div>
            </div>
        )
    }

    export default DuitaPhoto;