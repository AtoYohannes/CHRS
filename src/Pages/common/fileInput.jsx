import React from "react";
import { Progress } from "reactstrap";

const FileInput = ({ name, value, label, onChange, onClick, selectedFile }) => {
  return (
    <React.Fragment>
      <label htmlFor={name}>{label}</label>
      <div className="input-group">
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            onChange={onChange}
          />
          <label className="custom-file-label">
            {selectedFile ? selectedFile.name : "Choose file"}
          </label>
        </div>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={onClick}
          >
            Upload
          </button>
        </div>
        <div className="valid-feedback" style={{ display: "block" }}>
          <Progress
            max="100"
            color="success"
            value={value}
            style={{ marginBottom: 5 }}
          >
            {Math.round(value, 2)}%
          </Progress>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FileInput;
