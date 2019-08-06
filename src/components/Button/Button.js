import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { text } = props;
  return (
    <button type="button" className="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: "Text"
};

export default Button;
