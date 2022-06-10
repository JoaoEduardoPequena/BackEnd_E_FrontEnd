import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import {UpLoadArquivosClientes} from './components/UpLoadArquivosClientes';

export default class App extends Component {
  
  render () {
    return (
 
      <Layout>
        <Route exact path='/' component={UpLoadArquivosClientes} />
        <Route path='/cadastrararquivo' component={UpLoadArquivosClientes} />
      </Layout>
    
    );
  }
}
