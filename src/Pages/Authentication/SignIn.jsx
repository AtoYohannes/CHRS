import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Form, Col, CardHeader, CardImg, Row, Alert } from "reactstrap";
import Joi from "joi-browser";
import { connect } from "react-redux";

import { Facebook, Google } from "../../Assets/LoginAssets";
import routes from "../../Config/routes";
import ParentForm from "../common/form";
import { getUser } from "../../services/authService";
import {
  getStatus,
  getLoading,
  loginUser,
  resetErrors,
} from "../../store/users";

class SignIn extends ParentForm {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      data: { email: "", password: "" },
      errors: {},
    };
    this.schema = {
      email: Joi.string().email().required().label("email"),
      password: Joi.string().min(5).required().label("Password"),
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  doSubmit = () => {
    this.props.loginUser(this.state.data);
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }
  componentWillUnmount() {
    this.props.resetErrors();
    window.removeEventListener("resize", this.updatePredicate);
  }
  updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }
  render() {
    if (this.props.status === "success") {
      window.location = this.props.from
        ? this.props.from.pathname
        : routes.homePage;
    }
    if (getUser()) return <Redirect to="/" />;
    const isMobile = this.state.isMobile;
    let drawerClasses = "authContainer";
    if (!isMobile) {
      drawerClasses = "authContainer-Mobile";
    }

    return (
      <div className={drawerClasses}>
        <Card className="bg-background-card p-5 card">
          <CardHeader className="mb-3" align="center">
            <h5>
              <b>Sign in </b>
            </h5>
          </CardHeader>

          <Form onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            <Col align="right" className="mb-1">
              <Link to={{ pathname: routes.signUp }}>
                <small>Don't have an account?</small>
              </Link>
            </Col>
            {this.renderButton("Login")}
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
  loginUser: (userInfo) => dispatch(loginUser(userInfo)),
  resetErrors: () => dispatch(resetErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
