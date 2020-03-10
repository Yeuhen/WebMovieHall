import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TopRatedMovies } from '../components/pages/TopRatedMovies/TopRatedMovies';
import { MoviePage } from "../components/pages/MoviePage/MoviePage";

export const Routes = () => {
    return (
        <Switch>
            <Route path="/topRatedMovies" exact>
                <TopRatedMovies />
            </Route>
            <Route path="/movie" exact>
                <MoviePage />
            </Route>
            <Redirect to="/topRatedMovies" />
        </Switch>
    )
};