import React from 'react';
import ReactDOM from 'react-dom/client';
import { Botao } from './Botao';
import Logo from './Logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Ola mundo</h1>
    <Botao/>
    <Logo/>
  </div>
);
