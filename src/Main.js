import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Gallery from './Gallery';
import PictureDescription from './PictureDescription';
import Contact from './Contact';
import About from './About';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Gallery}></Route>
      <Route path='/picture/:topicId' component={PictureDescription}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
    </Switch>
  );
}

export default Main;