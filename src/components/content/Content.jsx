import {Route, Switch} from "react-router-dom";
import React from "react";
import {ThemeParks} from "./theme-park/ThemePark";
import {Gifts} from "./gift/Gift";
import {Attractions} from "./attractions/Attractions";

export function Content() {
    return <div className="container">
        <Switch>
            <Route path='/theme-parks'>
                <ThemeParks/>
            </Route>
            <Route path='/attractions'>
                <Attractions/>
            </Route>
            <Route path='/disney-characters'>
                <Attractions/>
            </Route>
            <Route path='/gifts'>
                <Gifts/>
            </Route>
        </Switch>
    </div>
}