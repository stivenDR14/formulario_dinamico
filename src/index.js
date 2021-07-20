import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navegacion from './paginas/Navegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import reducer from './reducers'
import {createStore} from 'redux';

const estadoInicial = {
  campos:[
    {
      tipoCampo:"text",
      propCampo:"",
      opcionCampo:"Opcional",
      limiteCampo:"50",
      labelCampo:"-",
    }
  ]
}

const store= createStore(reducer, estadoInicial);

ReactDOM.render(
  <Provider store={store}>
    <Navegacion />
  </Provider>,
  document.getElementById('root')
);
