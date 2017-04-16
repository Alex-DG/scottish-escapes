import React from 'react';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => (
  <div>
    { children }
  </div>
);

AppLayout.propTypes = {
  children: PropTypes.node
};

export default AppLayout;
