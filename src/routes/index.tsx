import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPageContainer from 'pages/LoginPage/containers';
import HomePageContainer from 'pages/HomePage/containers';
import PostCreatePageContainer from 'pages/PostCreatePage/containers';
import PostViewPageContainer from 'pages/PostViewPage/containers';

const Routes = () => {
  return (
    <Switch>
      <Route path="/post/view" component={PostViewPageContainer} />
      <Route path="/post/create" component={PostCreatePageContainer} />
      <Route path="/homepage" component={HomePageContainer} />
      <Route path="/" exact component={LoginPageContainer} />
    </Switch>
  );
};

export default Routes;
