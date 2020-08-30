import React from 'react';
import style from './style.scss';

const Page = () => (
  <div className={`${style.wrapper} ${style.aceBase}`}>
    <div className={style.overlay}>
      <h1>Goodbye World! Skynet taking over...</h1>
      <h2>SuperAwesome React boilerplate</h2>
    </div>
    <div className={style.eyes}>
      <i />
      <i />
    </div>
  </div>
);

export default Page;
