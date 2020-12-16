import React from "react";
import { MdFileUpload } from "react-icons/md";
import {
  Button,
  Col,
  Input,
  Progress,
  Card,
  Label,
  CardBody,
} from "reactstrap";

const FileInput = ({ name, value, label, onChange, onClick, selectedFile }) => {
  return (
    <Card className="border-0">
      <Label htmlFor={name}>{label}</Label>
      <div className="input-group">
        <CardBody>
          <div className="valid-feedback">
            <Progress color="success" value={value}>
              {Math.round(value, 2)}%
            </Progress>
          </div>
          <Col className="custom-file">
            <Input
              type="file"
              className="custom-file-input"
              onChange={onChange}
            />
            <label className="custom-file-label">
              {selectedFile ? selectedFile.name : "Choose file"}
            </label>
          </Col>
        </CardBody>

        <Col md={12} sm={12} xs={12} align="center">
          <Button outline onClick={onClick}>
            <MdFileUpload className="mr-2" />
            Upload
          </Button>
        </Col>
      </div>
    </Card>
  );
};

export default FileInput;
