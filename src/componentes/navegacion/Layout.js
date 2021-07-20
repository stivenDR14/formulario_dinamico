import React from 'react';

import Barra from '../navegacion/BarraSuperior';

function Layout(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Barra/>
      {props.children}
    </React.Fragment>
  );
}

export default Layout;