import ComplexGrid from "./Attraction";
import React, {useEffect, useState} from "react";
import GridListTile from "@material-ui/core/GridListTile";
import GridList from "@material-ui/core/GridList";
import {makeStyles} from "@material-ui/core/styles";
import {MyComplexGrid} from "./MyAttraction";

export function Attractions() {
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/attractions");
            const attractions = await response.json();
            setAttractions(attractions);
        })();
    }, []);


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

    const classes = useStyles();
    return <>
        <h2>Attractions</h2>
        {
            attractions.length === 0 ?
                <span>List of the attractions is empty</span> :
                (
                    <div className={classes.root}>
                    <GridList cellHeight={250}>
                    {attractions.map((attraction) => (
                        <GridListTile key={attraction} cols={1} style={{ width: '100%' }}>
                            <ComplexGrid attraction={attraction}/>
                        </GridListTile>
                    ))}
                    </GridList>
                    </div>
                )
            }
        </>
    // {
    //     attractions.length === 0 ? <span>List of the files is empty</span> : (<>
    //         {<ComplexGrid/>} </>)
    // }
}