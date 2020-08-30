import React from 'react';
import { render } from 'react-dom';
import Page from 'client/components/page';

const root = document.getElementById('root');

const App = () => (
  <>
    <Page />
  </>
);

render(<App />, root);
