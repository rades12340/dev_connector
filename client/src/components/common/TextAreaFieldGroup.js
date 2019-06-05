import React from "react";
import classNames from "classnames";

const TextAreaFieldGroup = ({
  name,
  placeholder,
  value,

  error,
  info,

  onChange
}) => {
  return (
    <div className="form-group">
      <textarea
        className={classNames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextAreaFieldGroup;
