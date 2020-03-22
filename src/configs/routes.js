import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import routesEnv from "./routesEnv";
import TopRatedPage from '../components/pages/TopRatedPage';
import VideoPage from "../components/pages/VideoPage";

const Routes = () => {

  return (
    <Switch>
      <Route path={routesEnv.TOP_RATED_TV_SHOWS} exact>
        <TopRatedPage product='tv'
                      topRated
        />
      </Route>
      <Route path={routesEnv.TOP_RATED_MOVIES} exact>
        <TopRatedPage product='movie'
                      topRated
        />
      </Route>
      <Route path={routesEnv.SEARCH_RESULT}>
        <TopRatedPage product='movie'
                      topRated={false}
        />
      </Route>
      <Route path={routesEnv.VIDEO_CARD_TV} exact>
        <VideoPage product='tv'/>
      </Route>
      <Route path={routesEnv.VIDEO_CARD_MOVIE} exact>
        <VideoPage product='movie'/>
      </Route>
      <Redirect to={routesEnv.TOP_RATED_MOVIES}/>
      <TopRatedPage product='movie'
                    topRated
      />
    </Switch>
  )
};

export default Routes;
