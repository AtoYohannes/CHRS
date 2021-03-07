import React from "react";
import { Link, Redirect } from "react-router-dom";
import {
  Card,
  FormGroup,
  Col,
  CardHeader,
  Row,
  Form,
  CardImg,
  Alert,
} from "reactstrap";
import { Facebook, Google } from "../../Assets/LoginAssets";
import routes from "../../Config/routes";
import Joi from "joi-browser";
import { connect } from "react-redux";

import ParentForm from "../common/form";
import { getUser } from "../../services/authService";

import {
  getStatus,
  getLoading,
  registerUser,
  resetErrors,
} from "../../store/users";
class SignUp extends ParentForm {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      data: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",
        birthDate: "",
      },
      errors: {},
    };
    this.nameValidation = Joi.string()
      .regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g)
      .trim()
      .required()
      .error((er) => {
        return {
          message: "Invalid name",
        };
      });
    this.schema = {
      firstName: this.nameValidation,
      lastName: this.nameValidation,
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required(),
      phone: Joi.string().max(15).required(),
      birthDate: Joi.date().required(),
      // confirmPassword: Joi.string()
      //   .required()
      //   .valid(Joi.ref("password"))
      //   .options({
      //     language: {
      //       any: {
      //         allowOnly: "!!Passwords do not match",
      //       },
      //     },
      //   }),
    };

    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }

  doSubmit = async () => {
    console.log("here is the data", this.state.data);
    await this.props.registerUser(this.state.data);
  };
  render() {
    if (this.props.status === "success") window.location = "/";
    if (getUser()) return <Redirect to="/" />;
    const isMobile = this.state.isMobile;
    let drawerClasses = "authContainer";
    if (!isMobile) {
      drawerClasses = "authContainer-Mobile";
    }

    return (
      <div className={drawerClasses}>
        <Card className="bg-background-card p-5 card">
          <CardHeader align="center" className="mb-3">
            <h5>
              <b>Create an account</b>
            </h5>
          </CardHeader>
          <Form onSubmit={this.handleSubmit}>
            {this.renderInput("firstName", "First Name")}
            {this.renderInput("lastName", "Last Name")}
            {this.renderInput("email", "Email Address")}
            {this.renderInput("phone", "Phone")}
            {this.renderInput("birthDate", "Birth Date", "Date")}
            {this.renderInput("password", "Password", "password")}
            {/* {this.renderInput(
              "confirmPassword",
              "Confirm Password",
              "password"
            )} */}
            <Col align="right" className="mb-1">
              <Link to={{ pathname: routes.signIn }}>
                <small>Already Have an account?</small>
              </Link>
            </Col>
            <FormGroup>{this.renderButton("Continue With Email")}</FormGroup>
            {this.props.errors && (
              <Alert color="danger">
                {Object.values(this.props.errors)[0]}
              </Alert>
            )}
          </Form>
          <Col align="center">
            <div>or</div>
            <hr />
            <Row>
              <Col md={6} sm={6} xs={6}>
                <CardImg src={Facebook} />
              </Col>
              <Col md={6} sm={6} xs={6}>
                <CardImg src={Google} />
              </Col>
            </Row>
            <hr />
            By signing in or creating an account, you agree with our Terms &
            Conditions and Privacy Statement
            <hr />
            All rights reserved.
          </Col>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  status: getStatus(state),
  loading: getLoading(state),
  errors: state.users.errors,
});
const mapDispatchToProps = (dispatch) => ({
  registerUser: (userInfo) => dispatch(registerUser(userInfo)),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
