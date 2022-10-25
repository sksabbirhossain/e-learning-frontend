import React from "react";

const FormInput = ({label, ...rest}) => {
  return (
    <div class="mb-3">
      <label htmlFor="exampleInput" class="form-label">  {label} </label>
          <input class="form-control" {...rest} />
    </div>
  );
};

export default FormInput;
