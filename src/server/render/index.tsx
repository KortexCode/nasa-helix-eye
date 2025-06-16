import React from 'react';
import { App } from '../../app/containers/App';
import { renderToString } from 'react-dom/server'
import { template } from './template';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';

export const render = (url: string, initialProps = {}) => {
  const sheet = new ServerStyleSheet(); // NECESARIO para styled-components con SSR
  try {
    const stream = renderToString(
      sheet.collectStyles(<StaticRouter location={url}>
        <App />
      </StaticRouter>)
    )
    const styleTags = sheet.getStyleTags(); //Extrae las etiquetas de estilos
    const html = template(stream, initialProps, styleTags);
    return html

  } catch (error) {
    console.log(error)
  }finally{
    sheet.seal();
  }
 
}