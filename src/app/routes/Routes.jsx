import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "../views/HomeView";
import {
    URL_HOME
} from "../shared/urls/urlConstants";
import { customHistory } from "../shared/services/historyServices";
/**
 * Routes of the application
 * with public and private route
 *
 * @author Jérémy Dejonghe
 */
const Routes = () => {
    return (
        <Switch history={customHistory}>
            <Route exact path={URL_HOME} component={HomeView} />
        </Switch>
    );
};

export default Routes;
