import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { P } from './styled';

const LinkComponent = ({ path, text }) => {
  return (
    <P>
      <Link to={`/${path}`}>{text}</Link>
    </P>
  );
};

LinkComponent.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default LinkComponent;
