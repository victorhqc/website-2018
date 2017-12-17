/* eslint no-param-reassign: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext }) => {
  staticContext.NotFound = true;

  return (
    <h1>Oops, route not found.</h1>
  );
};

NotFoundPage.defaultProps = {
  staticContext: {},
};

NotFoundPage.propTypes = {
  staticContext: PropTypes.shape({}),
};

export default {
  component: NotFoundPage,
};
