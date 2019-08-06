import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, value }) => {
  return (
    <label>
      {label}
      <input type="text" className="button" value={value} />;
    </label>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string
};

export default TextField;
