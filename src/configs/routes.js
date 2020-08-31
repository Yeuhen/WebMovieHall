import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import routesEnv from './routesEnv';
import GalleryPage from '../components/pages/GalleryPage';
import VideoPage from '../components/pages/VideoPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import UrlNotFoundPage from '../components/pages/UrlNotFoundPage';
import InfoPage from '../components/pages/InfoPage';

const Routes = ({ locale }) => {

console.log('routes locale:', locale);

  return (
    <Switch>
      <Route path="/" exact>
        <GalleryPage locale={locale} />
      </Route>
      <Route path={`${routesEnv.HOME}`} exact>
        <GalleryPage locale={locale} />
      </Route>
      <Route path="/gallery/:sectionVideo/:typeProduct">
        <GalleryPage locale={locale} />
      </Route>
      <Route path="search//:sectionVideo/:typeProduct/:searchData" exact>
        <GalleryPage locale={locale} />
      </Route>
      <Route path="/detail/:sectionVideo/:id/:typeProduct?" exact>
        <VideoPage locale={locale} />
      </Route>
      <Route path={`${routesEnv.INFO}`} exact>
        <InfoPage locale={locale}/>
      </Route>
      <Route path={`${routesEnv.VIDEO_NOT_FOUND}`} exact>
        <NotFoundPage locale={locale}/>
      </Route>
      <Route path={`${routesEnv.URL_NOT_FOUND}`} exact>
        <UrlNotFoundPage locale={locale}/>
      </Route>
      <Redirect to={`${routesEnv.URL_NOT_FOUND}`}/>
    </Switch>
  );
};

Routes.propTypes = {
  locale: PropTypes.string.isRequired,
};

export default Routes;
