import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './NoFound';
import Principal from './Principal';
import Test from './Test';
import Layout from '../componentes/navegacion/Layout';


export default function Navegacion (){
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/test" component={Test} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
      
    );

}