import React, {useEffect, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Popover, OverlayTrigger} from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 900,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));


const PopoverComponent = ({myData})=>{
    return (
        <>
        <Popover id="popover-basic">
            <Popover.Title as="h3">Info</Popover.Title>
                     <Popover.Content>
                         <strong>Price: </strong> {myData}
                     </Popover.Content>
        </Popover>
            </>
    );
}

// const popover = (
//     <Popover id="popover-basic">
//         <Popover.Title as="h3">Info</Popover.Title>
//         <Popover.Content>
//             <stron>Price: </stron>
//         </Popover.Content>
//     </Popover>
// );

const MyIconInfo = (props) => (
    <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={<PopoverComponent myData={props.price}/>}>
        <IconButton variant="success">
            <InfoIcon /></IconButton>
    </OverlayTrigger>
);

export function ThemeParks () {
    const [themeParks, setThemeParks] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/theme_parks");
            const themeParks = await response.json();
            setThemeParks(themeParks);
        })();
    }, []);

    const classes = useStyles();
    return <>
        <h2>Theme parks</h2>
        {
            themeParks.length === 0 ? <span>List of the theme parks is empty</span> : (<>
                {
                    <div className={classes.root}>
                        <GridList cellHeight={360} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            </GridListTile>
                            {themeParks.map((tile) => (
                                <GridListTile key={tile.image}>
                                    <img src={tile.image} alt={tile.location} />
                                    <GridListTileBar
                                        title={tile.location}
                                        actionIcon={
                                           <MyIconInfo price={tile.ticketPrice}/>
                                        }
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                }
            </>)
        }
    </>
}