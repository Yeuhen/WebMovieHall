import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TopRatedMoviesPage from '../components/pages/TopRatedMoviesPage';
import { Index } from "../components/pages/TopRatedTVPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/topRatedMovies" exact>
                <TopRatedMoviesPage />
            </Route>
            <Route path="/movie" exact>
                <Index />
            </Route>
            <Redirect to="/topRatedMovies" />
        </Switch>
    )
};

export default Routes;
