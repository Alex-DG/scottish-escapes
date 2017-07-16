import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  progressValue: PropTypes.number.isRequired,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

const defaultProps = {
  minValue: 0,
  maxValue: 100,
};

const ProgressBar = function ProgressBar({ progressValue, minValue, maxValue }) {
  const percentage = (progressValue - minValue) / (maxValue - minValue) * 100;
  const style = {
    width: `${ percentage }%`,
  };

  const className = classNames({
    progress: true,
    'progress-bar-container': true,
    'progress-completed': percentage === 100,
  });

  return (
    <div className={ className }>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={ progressValue }
        aria-valuemin={ minValue }
        aria-valuemax={ maxValue }
        style={ style }
      >
        <span className="sr-only">{ progressValue }% Complete</span>
      </div>
    </div>
  );
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
