import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import { Helmet } from 'react-helmet';
import Routes from './client/Routes';

const version = '[AIV]{version}[/AIV]';

export default ({ req, context }) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString((
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.path} context={context}>
        <Fragment>{renderRoutes(Routes)}</Fragment>
      </StaticRouter>
    </StyleSheetManager>
  ));
  const styleTags = sheet.getStyleTags();

  const helmet = Helmet.renderStatic();

  return `<html>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
    ${styleTags}
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="bundle.js?${version}"></script>
    <script>
      window.__VERSION__=${version}
    </script>
  </body>
</html>`;
};
