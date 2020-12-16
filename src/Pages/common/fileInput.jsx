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
  CardImg,
  Row,
} from "reactstrap";
import {
  Intercontinental,
  Sheraton,
  Skylight2,
} from "../../Assets/HotelImages/HotelView";

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
        <Col md={12} sm={12} xs={12} className="imagePreview">
          <Row>
            {/* // TODO : Do your mappings here */}
            <Col md={4} sm={12} xs={12}>
              <Card className=" zoom mb-2">
                <CardImg src={Intercontinental} />
              </Card>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Card className=" zoom mb-2">
                <CardImg src={Skylight2} />
              </Card>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Card className=" zoom mb-2">
                <CardImg src={Sheraton} />
              </Card>
            </Col>
            <Col md={4} sm={12} xs={12}>
              <Card className=" zoom mb-2">
                <CardImg src={Intercontinental} />
              </Card>
            </Col>
          </Row>
        </Col>

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
