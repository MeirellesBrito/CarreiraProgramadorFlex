import React from 'react';
import ReactDOM from 'react-dom/client';
import Alert from './Alert';
import { Botao } from './Botao';
import BotaoLegal from './BotaoLegal';
import ConsultarApi from './ConsultarApi';
import LIstaImagens from './LIstaImagens';
import LIstaTarefas from './LIstaTarefas';
import Logo from './Logo';
import MeuDiario from './MeuDiario/MeuDiario';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <MeuDiario dia="1"/>
    <MeuDiario dia="2"/>
    <MeuDiario dia="3"/>
    <MeuDiario dia="4"/>

  </div>
);
