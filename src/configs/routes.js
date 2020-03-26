import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import routesEnv from './routesEnv';
import TopRatedPage from '../components/pages/TopRatedPage';
import VideoPage from '../components/pages/VideoPage';
import NotFoundPage from '../components/pages/NotFoundPage';

const Routes = ({locale}) => {

  return (
    <Switch>
      <Route path={`${routesEnv.TOP_RATED_TV_SHOWS}/:locale`} exact>
        <TopRatedPage product='tv'
                      topRated
                      locale={locale}
        />
      </Route>
      <Route path={`${routesEnv.TOP_RATED_MOVIES}/:locale`} exact>
        <TopRatedPage product='movie'
                      topRated
                      locale={locale}

        />
      </Route>
      <Route path={`${routesEnv.SEARCH_RESULT}/:locale/:searchData`}>
        <TopRatedPage product='movie'
                      topRated={false}
                      locale={locale}
        />
      </Route>
      <Route path={`${routesEnv.VIDEO_CARD_TV}/:locale/:id`} exact>
        <VideoPage product='tv'
                   locale={locale}
        />
      </Route>
      <Route path={`${routesEnv.VIDEO_CARD_MOVIE}/:locale/:id`} exact>
        <VideoPage product='movie'
                   locale={locale}
        />
      </Route>
      <Route path={`${routesEnv.VIDEO_NOT_FOUND}/:locale`} exact>
        <NotFoundPage locale={locale}/>
      </Route>
      <Redirect to={`${routesEnv.VIDEO_NOT_FOUND}`}/>
      <NotFoundPage locale='en-US' />
    </Switch>
  );
};

Routes.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Routes;
