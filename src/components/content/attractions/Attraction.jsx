import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900
    },
    image: {
        width: 200,
        height: 200,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}));

export default function ComplexGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={7}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={props.attraction.image} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} md container>
                        <Grid item xs container direction="column" spacing={1}>
                            <Grid item xs>
                                <Typography gutterBottom variant="subtitle1" >
                                    <b>{props.attraction.name}</b>
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{textAlign: 'left', marginTop: '110px'}}>
                                    Location: {props.attraction.location}
                                </Typography>
                            </Grid>
                            {/*<Grid item>*/}
                            {/*    <Typography variant="body2" style={{ cursor: 'pointer' }}>*/}
                            {/*        Remove*/}
                            {/*    </Typography>*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">${props.attraction.ticketPrice}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}