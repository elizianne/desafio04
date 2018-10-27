import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Cart from '../pages/cart';
import Product from '../pages/product';
import Category from '../pages/category';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/category/:id" component={Category} />
    <Route path="/products/:id" component={Product} />
    <Route path="/cart" component={Cart} />
  </Switch>
);

export default Routes;
