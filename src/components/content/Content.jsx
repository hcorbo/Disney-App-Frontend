import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import {ThemeParks} from "./theme-park/ThemePark";
import {Gifts} from "./gift/Gift";
import {Attractions} from "./attractions/Attractions";
import './Contet.css'
import {QuestionForm} from "./help/QuestionForm";

export function Content() {
    return <div className="container content">
        <Switch>
            <Route
                exact
                path="/"
                render={() => {
                    return (
                            <Redirect to="/theme-parks" />
                    )
                }}
            />
            <Route path='/theme-parks'>
                <ThemeParks/>
            </Route>
            <Route path='/attractions'>
                <Attractions/>
            </Route>
            <Route path='/contact-us'>
                <QuestionForm/>
            </Route>
            <Route path='/gifts'>
                <Gifts/>
            </Route>
        </Switch>
    </div>
}